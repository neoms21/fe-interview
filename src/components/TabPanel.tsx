import React from "react";

export interface TabPanelProps {
  children: React.ReactNode;
}
const TabPanel: React.FC<TabPanelProps> = ({ children }) => <>{children}</>;

export default TabPanel;
