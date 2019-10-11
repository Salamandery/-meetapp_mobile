import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Routes from '~/Route';
const App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#391326" barStyle="light-content" />
        <Routes />
      </SafeAreaView>
  );
};

export default App;
