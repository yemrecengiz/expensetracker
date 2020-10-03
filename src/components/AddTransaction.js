import {
  TextField,
  Card,
  CardHeader,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    console.log("a")
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }


  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <CardHeader title="Add New Transaction" />
        <Typography style={{ margin: 18 }}>
          Write Amount (Negative-expense / Positive-income )
        </Typography>

        <FormControl fullWidth variant="outlined">
          <InputLabel
            style={{ marginLeft: 10 }}
            htmlFor="outlined-adornment-amount"
          >
            Amount
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          <Typography style={{ margin: 18 }}>Write Text</Typography>
          <TextField
            style={{ marginLeft: 10, marginRight: 10, marginBottom: 10 }}
            label="Text"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            onClick={onSubmit}
            style={{ margin: 10, height: 40 }}
            variant="contained"
            color="primary"
          >
            Add Transaction
          </Button>
        </FormControl>
        
      </Card>
    </>
  );
};
