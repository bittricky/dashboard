import React from 'react';
import {AppContext} from '../AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';

import {SelectableTile, DisabledTile, DeletableTile} from '../Shared/Tile';
import CoinImage from '../Shared/CoinImage';

export default function({coinKey, topSection}) {

  return <AppContext.Consumer>
  {({coinList}) => {
    let coin = coinList[coinKey];
    let TileClass = SelectableTile;
    if (topSection) {
      TileClass = DeletableTile;
    }
    return <TileClass>
      <CoinImage coin={coin} />
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection}/>
    </TileClass>
  }}
  </AppContext.Consumer>
}
