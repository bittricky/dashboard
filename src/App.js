import React from 'react';

import AppLayout from './AppLayout';
import {AppProvider} from './AppProvider';
import AppBar from './AppBar';

import Settings from './Settings';

import Content from './Shared/Content';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
