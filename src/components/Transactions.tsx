import React from "react";
import styled from "styled-components";
import { Transaction } from "types";
import TransactionComponent from "./Transaction";

interface TransactionsProps {
  transactions: Array<Transaction>;
  isSetAsBill: boolean;
  onClick: () => void;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 1rem 0.5rem;
  border-radius: 8px;
  background-color: teal;
  font-family: "Mukta Vaani", Open-Sans, Helvetica, Sans-Serif;
  color: white;
  margin: 0 auto;
  border: none;
  font-size: 1rem;
  min-width: 120px;
`;

const Transactions: React.FC<TransactionsProps> = ({
  transactions,
  isSetAsBill,
  onClick,
}) => {
  return (
    <StyledContainer>
      {transactions.map((transaction) => (
        <TransactionComponent key={transaction.id} transaction={transaction} />
      ))}

      <StyledButton data-testid="btnToggle" onClick={onClick}>
        {isSetAsBill ? "Remove from bills" : "Add to bills"}
      </StyledButton>
    </StyledContainer>
  );
};

export default Transactions;
