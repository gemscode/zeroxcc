import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { LinearProgress } from "@material-ui/core";
import { connect } from 'react-redux';
import { Component } from 'react';

const columns = [
  {
    id: 'type',
    label: 'Type',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 300,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  }
];
    
class ElementsTable extends Component {
  
  constructor(props) {
        super(props);

        this.state = {
            data: [],
            page: 0,
            rowsPerPage: 10,
            dataLoaded: false,
            API_URL: "http://localhost:4000",
            classes: makeStyles({
                      table: {
                        minWidth: 500,
                      },
                    })
        }

  };

  TablePaginationActions(props) 
  {
    const classes = makeStyles((theme) => ({
                      root: 
                      {
                        flexShrink: 0,
                        marginLeft: theme.spacing(2.5),
                      },
                  }));
    let { count, page, rowsPerPage, onChangePage} = props;
    
    return (
      <div className={classes.root} style={{display: "inline-block", whiteSpace: "nowrap"}} >
        <IconButton
          onClick={onChangePage(this, 0)}
          disabled={page === 0}
          aria-label="first page"
        >
          {{useTheme}.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={onChangePage(this, page - 1)} disabled={page === 0} aria-label="previous page">
          {{useTheme}.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={onChangePage(this, page + 1)}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {{useTheme}.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={onChangePage(this, Math.max(0, Math.ceil(count / rowsPerPage) - 1))}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {{useTheme}.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

  handleChangePage = (event, newPage) => {

    this.page = newPage;
  };

  handleChangeRowsPerPage = (event) => {
    this.rowsPerPage = parseInt(event.target.value, 10);
    this.page = 0;
  };

  createRow(type, name) {
    return { type, name };
  }

  render() 
  {
    let { rows, page, rowsPerPage, classes} = this.state;

    if (this.props.memory.object === "") 
    {
      return <LinearProgress />;
    } else 
    {
      if (Array.isArray(this.props.memory.object.data)) 
          rows = Array.from(this.props.memory.object.data).map(item => this.createRow(item.role, item.name));

      const emptyRows = this.rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

      return (
          <TableContainer component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="DOM Elements" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, backgroundColor: "rgb(44 44 44)", paddingTop: '15px' }}>
                      { column.label }
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: "rgb(32 32 32)"}}>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align} style={{border: '0px', padding: '5px 15px 2px 15px', fontFamily: 'Segoe UI', color:'RGB(240 194 130'}}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
              </TableBody>
              <TableFooter>
                <TableRow style={{ backgroundColor: "rgb(44 44 44)", padding: '5px 15px 2px 15px'}}>
                  <TablePagination
                    rowsPerPageOptions={[5]}
                    colSpan={2}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={this.TablePaginationActions}
                    style={{ padding: '1px'}}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        );
    }
  }
}


function mapStateToProps(state) {
    return {
        memory: state.memory
    }
}

export default connect(mapStateToProps)(ElementsTable);
