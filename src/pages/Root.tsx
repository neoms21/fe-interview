import Merchants from "components/Merchants";
import Tab from "components/Tab";
import TabList from "components/TabList";
import TabPanel from "components/TabPanel";
import Tabs from "components/Tabs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_CATEGORIES, FETCH_MERCHANTS } from "sagas/action-types";
import { raiseFetchAction } from "sagas/actions";

const Root: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(raiseFetchAction(FETCH_MERCHANTS));
    dispatch(raiseFetchAction(FETCH_CATEGORIES));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Tabs>
      <TabList>
        <Tab>
          <p>Selected bills</p>
        </Tab>
        <Tab>
          <p>Prospective bills</p>
        </Tab>
      </TabList>
      <TabPanel>
        <Merchants merchantSetAsBill />
      </TabPanel>
      <TabPanel>
        <Merchants merchantSetAsBill={false} />
      </TabPanel>
    </Tabs>
  );
};

export default Root;
