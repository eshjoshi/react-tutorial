import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { getUserActivity } from './VirtualBankingService';
import { EnhancedTableHead, stableSort, getComparator } from './TableShorting';

const tableHeaderName = [
  {
    id: 'userid',
    numeric: false,
    disablePadding: true,
    label: 'User Id',
    align: 'left',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    align: 'left',
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: true,
    label: 'Username',
    align: 'left',
  },
  {
    id: 'createdat',
    numeric: false,
    disablePadding: false,
    label: 'Date',
    align: 'left',
  },
  {
    id: 'role',
    numeric: true,
    disablePadding: true,
    label: 'Role',
    align: 'left',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function UserActivityPage(props) {
  const accountValue = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [users, setUsers] = React.useState(null);
  React.useEffect(() => {
    getUserActivity(accountValue.match.params.id).then((response) => {
      setUsers(response.user);
    });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users && users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users && users.length - page * rowsPerPage);

  return (
    users && (
      <div className="virtualBankingPage">
        <Typography variant="h4" gutterBottom>
          Account Activity List
        </Typography>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start">
          <Button
            variant="contained"
            color="primary"
            size="small"
            component={Link}
            to="/userAccount"
          >
            Back
          </Button>
        </Grid>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                headername={tableHeaderName}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={users.length}
              />
              <TableBody>
                {stableSort(users, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow>
                        <TableCell align="left">{row.userid}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">
                          {moment(row.createdat).format('DD/MM/YYYY')}
                        </TableCell>
                        <TableCell align="left">{row.role}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    )
  );
}

UserActivityPage.propTypes = {
  accountValue: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};
