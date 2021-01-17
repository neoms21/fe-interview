import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedMerchants } from "redux/selectors";
import { AppState, UiMerchant } from "types";
// import { v4 as uuidv4 } from "uuid";
import Merchant from "./Merchant";
import "react-accessible-accordion/dist/fancy-example.css";
import styled from "styled-components";
import Transactions from "./Transactions";
import { toggleMerchantAction } from "sagas/actions";

interface MerchantsProps {
  merchantSetAsBill: boolean;
}

const StyledAccordionButton = styled(AccordionItemButton)<{ rotated: number }>`
  background-color: #f4f4f4;
  color: #444;
  cursor: pointer;
  padding: 8px;
  padding-left: 1rem;
  text-align: left;
  display: flex;
  border: none;
  justify-items: center;
  align-items: center;

  &::before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: ${({ rotated }) =>
      rotated ? "rotate(-45deg)" : "rotate(45deg)"};
    transition: transform 0.2s;
  }
`;

const Merchants: React.FC<MerchantsProps> = ({ merchantSetAsBill }) => {
  const dispatch = useDispatch();
  const merchants = useSelector((state: AppState) =>
    getFormattedMerchants(state, merchantSetAsBill)
  );

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    if (Object.keys(expandedItems).length !== merchants.length) {
      setExpandedItems(
        merchants.reduce((acc: Record<string, boolean>, m) => {
          return { ...acc, [m.id]: false };
        }, {})
      );
    }
  }, [merchants, expandedItems]);

  const handleClick = (merchant: UiMerchant) => {
    dispatch(toggleMerchantAction(merchant.id, !merchant.isBill));
  };

  return (
    <Accordion allowZeroExpanded>
      {merchants.map((merchant) => (
        <AccordionItem
          onClick={() => {
            const updatedExpandedItems: Record<string, boolean> = {};
            Object.keys(expandedItems).forEach(
              (i) => (updatedExpandedItems[i] = i === merchant.id)
            );
            setExpandedItems(updatedExpandedItems);
          }}
          key={merchant.name}
        >
          <AccordionItemHeading>
            <StyledAccordionButton rotated={expandedItems[merchant.id] ? 1 : 0}>
              <Merchant key={merchant.id} merchant={merchant} />
            </StyledAccordionButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Transactions
              isSetAsBill={merchant.isBill}
              transactions={merchant.transactions}
              onClick={() => handleClick(merchant)}
            />
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Merchants;
