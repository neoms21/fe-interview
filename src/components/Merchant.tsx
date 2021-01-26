import React from "react";
import styled from "styled-components";
import { UiMerchant } from "types";
import { getFormattedPayment } from "utils";
import Image from "./Image";

interface MerchantProps {
  merchant: UiMerchant;
}

const StyledMerchantContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  flex: 1;
  align-items: center;
  img {
    height: 40px;
    justify-self: center;
  }
`;

const StyledMerchant = styled.div`
  display: flex;
  justify-items: center;
  img {
  }
`;

const Merchant: React.FC<MerchantProps> = ({ merchant }) => {
  const {
    name,
    iconUrl,
    categoryIconUrl,
    categoryName,
    averageSpend,
  } = merchant;

  return (
    <StyledMerchantContainer>
      <StyledMerchant>
        <span>{name}</span> - <span>{getFormattedPayment(averageSpend)}</span>
      </StyledMerchant>
      <Image src={iconUrl} alt={name} />
    </StyledMerchantContainer>
  );
};

export default Merchant;
