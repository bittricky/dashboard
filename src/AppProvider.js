import React, { Component, createContext } from 'react';

const cc = require('cryptocompare')

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data
    this.setState({ coinList });
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });

    //localStorage.setItem('coin', {})
  }

  savedSettings() {
    let data = JSON.parse(localStorage.getItem('coin'));
    if (!data) {
      return {
        page: 'settings',
        firstVisit: true
      }
    }

    return {};
  }

  setPage = page => this.setState({ page })

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
