import React, { useContext } from "react";
import List from "@material-ui/core/List";
import {  Card, CardHeader } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";
import {Transaction} from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <Card style={{ marginTop: 10 }}>
        <CardHeader title=" Transaction List "></CardHeader>
        <List>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction}/>
          ))}
        </List>
      </Card>
    </>
  );
};
