import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);
  
  return (
    <>
      <Card className="in-exp-card">
        <Container>
          <Row>
            <Col className="inc-col">
              <h4>Income</h4>
              <p>{income}</p>

              <h4>Expense</h4>
              <p>{expense}</p>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
