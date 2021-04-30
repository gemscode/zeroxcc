import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Component } from 'react';
import {LinearProgress} from "@material-ui/core";
import {connect} from 'react-redux';

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

class AccessibilityTable extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          data: [],
          page: 0,
          rowsPerPage: 10,
          dataLoaded: false,
          API_URL: "http://localhost:4000",
          style: makeStyles({
                      root: {
                        width: '100%',
                      },
                      container: {
                        maxHeight: 440,
                      },
                    }),
      }

    };

   handleChangePage = (event, newPage) => {
    this.page = newPage;
  };

   handleChangeRowsPerPage = (event) => {
    this.rowsPerPage += event.target.value;
    this.page = 0;
  };

  createRow(type, name) {
    return { type, name };
  }

  render() {
      let { rows, page, rowsPerPage, style} = this.state;

      if (this.props.memory.object === "") {
          return <LinearProgress />;
      } else {
          if (Array.isArray(this.props.memory.object.data)) 
            rows = Array.from(this.props.memory.object.data).map(item => this.createRow(item.role, item.name));

          return (
            <Paper className={style.root}>
              <TableContainer className={style.container} >
                <Table stickyHeader aria-label="sticky table" size="small">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, backgroundColor: "black"}}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </Paper>
          );
      }
    }
}

function mapStateToProps(state) {
    return {
        memory: state.memory
    }
}

export default connect(mapStateToProps)(AccessibilityTable);
