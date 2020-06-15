import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './VirtualBankingPage.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { getAccount } from './VirtualBankingService';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.userid}
        </TableCell>
        <TableCell align="left"> {moment(row.createdat).format('DD/MM/YYYY')}</TableCell>
        <TableCell align="left">{`₹${row.balance / 100}`}</TableCell>
        <TableCell align="left">
          <Link to={`/manageAccount/${row.id}`}>Manage Account</Link>
        </TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Activity
              </Typography>
              <Table size="small" aria-label="purchases" className="vbTableBorder">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Amout</TableCell>
                    <TableCell align="left">Balance</TableCell>
                    <TableCell align="left">Opration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activity.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {moment(historyRow.createdat).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        {`₹${historyRow.amount / 100}`}
                        {}
                      </TableCell>
                      <TableCell align="left">{`₹${historyRow.balance / 100}`}</TableCell>
                      <TableCell align="left">{historyRow.operation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userid: PropTypes.string.isRequired,
    createdat: PropTypes.string.isRequired,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default function VirtualBankingPage() {
  const [accounts, setAccounts] = React.useState(null);
  React.useEffect(() => {
    getAccount().then((response) => {
      setAccounts(response.accounts);
    });
  }, []);

  return (
    accounts && (
      <div className="virtualBankingPage">
        <Typography variant="h4" gutterBottom>
          Virtual Banking
        </Typography>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start">
          {' '}
          <Button variant="outlined" color="primary" component={Link} to="/newAccount">
            New Account
          </Button>
          <Button variant="contained" color="primary" size="small" component={Link} to="/home">
            Back
          </Button>
        </Grid>
        <TableContainer component={Paper} className="vbTableBorder">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Balance</TableCell>
                <TableCell align="left">Action</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
}
