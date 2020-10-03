import { Box, Container } from "@material-ui/core";
import React, { useContext } from "react";
import "./comps.css";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <Container maxWidth="md" fixed className="balance-container">
        <Box textAlign="center" fontSize="30px">
          Your Balance : <span id="balance">{total}$</span>
        </Box>
      </Container>
    </>
  );
};
