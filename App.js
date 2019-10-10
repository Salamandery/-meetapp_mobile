import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Routes from '~/Route';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
