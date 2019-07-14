import React from 'react';
import {AppContext} from '../AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';

import {SelectableTile} from '../Shared/Tile';
import CoinImage from '../Shared/CoinImage';

export default function({coinKey}) {

  return <AppContext.Consumer>
  {({coinList}) => {
    let coin = coinList[coinKey];
    const TileClass = SelectableTile;
    return <TileClass>
      <CoinImage coin={coin} />
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
    </TileClass>
  }}
  </AppContext.Consumer>
}
