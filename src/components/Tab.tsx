import React from "react";
import { StyleConstants } from "shared/constants";
import styled, { css } from "styled-components";

export interface TabProps {
  children: React.ReactElement;
  onClick?: () => void;
  isActive?: boolean;
}

const StyledTab = styled.div<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${StyleConstants.colors.acidGreen};
          color: ${StyleConstants.colors.darkBlue};
        `
      : ""}
`;

const Tab: React.FC<TabProps> = (props): JSX.Element => {
  const { children, onClick, isActive } = props;

  return (
    <StyledTab isActive={isActive} onClick={onClick}>
      {children}
    </StyledTab>
  );
};

export default Tab;
