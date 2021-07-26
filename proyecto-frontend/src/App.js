import React from 'react';
import axios from 'axios';
import Router from './router/Router';
import {ContextProvider} from './util/Context';
import {SocketProvider} from './util/SocketProvider';

axios.defaults.withCredentials = true;

function App() {
  return (
    <ContextProvider>
      <SocketProvider>
        <Router/>
      </SocketProvider>
    </ContextProvider>
  );
}

export default App;
