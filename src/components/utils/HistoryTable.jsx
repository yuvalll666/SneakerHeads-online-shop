import React, { useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  withStyles,
  Button,
} from "@material-ui/core";

function HistoryTable({ history }) {
  const getDate = (date) => {
    let newDate = new Date(date);
    let yy = newDate.getFullYear();
    let mm = newDate.getMonth() + 1;
    if (mm < 10) {
      mm = "0" + mm;
    }
    let dd = newDate.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }
    let hh = newDate.getHours()
    let sec = newDate.getSeconds()
    let min = newDate.getMinutes()

    let formatedDate = `${yy}-${mm}-${dd} ${hh}:${min}:${sec}`;

    return formatedDate ? formatedDate : null;
  };

  useEffect(() => {
    console.log("history Changed");
  }, [history]);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-success">
              <TableCell align="left">Payment ID</TableCell>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price / per 1</TableCell>
              <TableCell align="left">Date Of Purchase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((item, index) => (
              <TableRow
                key={index}
                className={index % 2 ? "bg-light" : "bg-white"}
              >
                <TableCell align="left">{item.paymentId}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="left">${item.price}</TableCell>
                <TableCell align="left">{getDate(item.dateOfPurchase)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HistoryTable;
