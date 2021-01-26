import React from "react";
import styled from "styled-components";
import { format, parse } from "date-fns";
import { Transaction } from "types";
import { getFormattedPayment } from "utils";

interface TransactionProps {
  transaction: Transaction;
}

const StyledTransaction = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1rem;
  background: #f1e8e6;
  color: #361d32;
  margin-bottom: 0.75rem;
`;

const StyledCurrency = styled.span`
  justify-self: end;
`;

const TransactionComponent: React.FC<TransactionProps> = ({ transaction }) => {
  const { amount, date } = transaction;
  return (
    <StyledTransaction>
      <span>
        {format(parse(date, "yyyy-MM-dd", new Date()), "EEE, dd MMM yyyy")}
      </span>
      <StyledCurrency>{getFormattedPayment(amount)}</StyledCurrency>
    </StyledTransaction>
  );
};

export default TransactionComponent;
