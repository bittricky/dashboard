import React from 'react';
import {AppContext} from '../AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';

import {SelectableTile, DisabledTile, DeletableTile} from '../Shared/Tile';
import CoinImage from '../Shared/CoinImage';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey);
  } : () => {
    addCoin(coinKey);
  }
}

export default function({coinKey, topSection}) {

  return <AppContext.Consumer>
  {({coinList, addCoin, removeCoin, isInFavorites}) => {
    let coin = coinList[coinKey];
    let TileClass = SelectableTile;

    if (topSection) {
      TileClass = DeletableTile;
    } else if (isInFavorites(coinKey)) {
      TileClass = DisabledTile;
    }

    return <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
      <CoinImage coin={coin} />
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection}/>
    </TileClass>
  }}
  </AppContext.Consumer>
}
