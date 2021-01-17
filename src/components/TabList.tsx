import React from "react";
import styled from "styled-components";
import { TabProps } from "./Tab";
export interface TabListProps {
  children: React.ReactElement<TabProps>[];
}

const StyledTabList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: solid 1px pink;
`;

const TabList: React.FC<TabListProps> = ({ children }) => {
  return <StyledTabList>{children}</StyledTabList>;
};

export default TabList;
