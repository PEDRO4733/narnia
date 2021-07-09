import React from 'react';
import axios from 'axios';
import Router from './router/Router';
import {ContextProvider} from './util/Context';

axios.defaults.withCredentials = true;

function App() {
  return (
    <ContextProvider>
      <Router/>
    </ContextProvider>
  );
}

export default App;
