import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import {Navigator} from './navigation/Navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

export default App;
