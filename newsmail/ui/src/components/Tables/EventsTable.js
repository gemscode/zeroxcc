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
    minWidth: 60,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'useCapture',
    label: 'Use Capture',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'passive',
    label: 'Passive',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'scriptId',
    label: 'Script Id',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lineNumber',
    label: 'Line Nbr',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  }
];

class EventsTable extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          data: [],
          page: 0,
          rowsPerPage: 10,
          dataLoaded: false,
          API_URL: "http://localhost:4000",
          style: makeStyles(
          {
              root: { width: '100%', marginTop: '0px'},
              container: { axHeight: 300 },
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

  createRow(type, useCapture, passive, once, scriptId, lineNumber, columnNumber) {
    return { type, useCapture, passive, scriptId, lineNumber };
  }

  render() {
      let { rows, page, rowsPerPage, style} = this.state;

      if (this.props.memory.object === "") {
          return <LinearProgress />;
      } else {
          if (Array.isArray(this.props.memory.object.events)) 
            rows = Array.from(this.props.memory.object.events).map(item => this.createRow(item.type, item.useCapture, item.passive, item.once, item.scriptId, item.lineNumber, item.columnNumber));

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

export default connect(mapStateToProps)(EventsTable);
