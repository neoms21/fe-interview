import Merchants from "components/Merchants";
import Tab from "components/Tab";
import TabList from "components/TabList";
import TabPanel from "components/TabPanel";
import Tabs from "components/Tabs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedMerchantsCount } from "redux/selectors";
import { FETCH_CATEGORIES, FETCH_MERCHANTS } from "sagas/action-types";
import { raiseFetchAction } from "sagas/actions";
import styled from "styled-components";

const StyledPill = styled.span`
  background: purple;
  color: whitesmoke;
  border-radius: 50%;
  display: inline-block;
  padding: 8px;
`;

const Root: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [selectedMerchantsCount, prospectiveMerchantsCount] = useSelector(
    getSelectedMerchantsCount
  );

  useEffect(() => {
    dispatch(raiseFetchAction(FETCH_MERCHANTS));
    dispatch(raiseFetchAction(FETCH_CATEGORIES));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>
          <>
            <p>
              Selected bills - <StyledPill>{selectedMerchantsCount}</StyledPill>
            </p>
          </>
        </Tab>
        <Tab>
          <p>Prospective bills - {prospectiveMerchantsCount}</p>
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
