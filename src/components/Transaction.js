import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <ListItem className={transaction.amount < 0 ? "minus" : "plus"}>
      <Button
        onClick={() => deleteTransaction(transaction.id)}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <ListItemText
        className="money"
        style={{ marginLeft: 15 }}
        primary={transaction.text}
        secondary={sign + "$ " + Math.abs(transaction.amount)}
      />
    </ListItem>
  );
};
