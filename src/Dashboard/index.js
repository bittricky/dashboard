import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
`;

export default function() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <PriceChart />
      </ChartGrid>
    </Page>
  )
}
