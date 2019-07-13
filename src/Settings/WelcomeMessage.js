import React from 'react';
import {AppContext} from '../AppProvider';

export default function({firstVisit}) {
  return (
    <AppContext.Consumer>
      {
        ({firstVisit}) =>
          firstVisit ? <div> Welcome to Coin, please select your favorite coins to begin.{' '} </div> : null
      }
    </AppContext.Consumer>
  )
}
