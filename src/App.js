import React from 'react';

import AppLayout from './AppLayout';
import {AppProvider} from './AppProvider';

import AppBar from './components/AppBar';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
