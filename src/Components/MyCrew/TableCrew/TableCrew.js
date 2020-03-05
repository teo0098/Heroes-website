import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      minWidth: 300
    }
  });

const TableCrew = props => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Hero's name</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.heroes.length === 0 ?
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <strong> No heroes yet </strong>
                        </TableCell>
                    </TableRow>
                :
                props.heroes.map(hero => (
                    <TableRow key={hero}>
                        <TableCell component="th" scope="row">
                            <Link className="MyCrew__Link" to={`/heroes/hero/${hero}`}>
                                <strong> {hero} </strong>
                            </Link>
                        </TableCell>
                        <TableCell align="right">
                            <Button variant="contained" onClick={() => props.removeHero(hero)} 
                            style={{ backgroundColor: '#b71c1c', alignSelf: 'center' }}>Remove</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableCrew;