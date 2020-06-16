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
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getUserActivity } from './VirtualBankingService';
import { EnhancedTableHead, stableSort, getComparator } from './TableShorting';
import ButtonAppBar from './Appbar';

const tableHeaderName = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Account Id',
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
    id: 'balance',
    numeric: false,
    disablePadding: true,
    label: 'Amount',
    align: 'left',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: true,
    label: 'Action',
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

export default function UsersAccountPage(props) {
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
      const newSelecteds = users && users.accounts.map((n) => n.name);
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users && users.accounts.length - page * rowsPerPage);

  return (
    users && (
      <div>
        <ButtonAppBar />
        <div className="virtualBankingPage">
          <Typography variant="h4" gutterBottom>
            User Account List
          </Typography>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Typography variant="h6" gutterBottom className="userDetailsPadding">
              User Name :- {users.username}
            </Typography>
            <Typography variant="h6" gutterBottom className="userDetailsPadding">
              Role :- {users.role}
            </Typography>
            <Typography variant="h6" gutterBottom className="userDetailsPadding">
              Created Date :- {moment(users.createdat).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid container direction="row" justify="flex-end" alignItems="flex-start">
            <Button variant="contained" color="primary" size="small" component={Link} to="/users">
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
                  rowCount={users.accounts.length}
                />
                <TableBody>
                  {stableSort(users.accounts, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow key={row.userid}>
                          <TableCell align="left">{row.id}</TableCell>
                          <TableCell align="left">
                            {moment(row.createdat).format('DD/MM/YYYY')}
                          </TableCell>
                          <TableCell align="left">{`₹${row.balance / 100}`}</TableCell>
                          <TableCell align="left">
                            <Link to={`/accountActivity/${users.userid}/${row.id}`}>
                              View Activity
                            </Link>
                            <br />
                            <Link to={`/manageAccount/${users.userid}/${row.id}`}>
                              Manage Account
                            </Link>
                          </TableCell>
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
              count={users.accounts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    )
  );
}

UsersAccountPage.propTypes = {
  accountValue: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};
