import React, { useState } from "react";

import TabList from "./TabList";
import TabPanel from "./TabPanel";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const { children } = props;

  const handleClick = (selectedTab: number) => {
    setActiveTab(selectedTab);
  };

  const renderTabList = (child: any) => {
    return React.cloneElement(child, {
      children: React.Children.map(child.props.children, (childTab, index) => {
        if (childTab.type.name === "Tab") {
          const isActive = index + 1 === activeTab;

          return React.cloneElement(childTab, {
            isActive,
            onClick: () => handleClick(index + 1),
          });
        }

        return childTab;
      }),
    });
  };

  const renderChildren = (children: React.ReactNode) => {
    if (!children) return null;

    return React.Children.map(children, (element, index) => {
      if (!React.isValidElement(element)) return;

      if ((element as JSX.Element).type === TabList) {
        return renderTabList(element);
      }
      if ((element as JSX.Element).type === TabPanel) {
        return index === activeTab ? React.cloneElement(element) : null;
      }
      return null;
    });
  };

  return <div> {renderChildren(children)}</div>;
};

export default Tabs;
