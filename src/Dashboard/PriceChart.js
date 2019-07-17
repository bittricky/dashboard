import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';

ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext>
      {({historical}) => (
        <Tile>
        {
          historical ? 
          <ReactHighCharts config={highchartsConfig(historical)} />
          : <div> Loading Chart </div>
        }
        </Tile>
      )}
    </AppContext>
  )
}
