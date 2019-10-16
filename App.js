import React from 'react';
import {
  PersistGate
} from 'redux-persist/integration/react';
import {
  Provider
} from 'react-redux';
import {
  SafeAreaView,
} from 'react-native';
import './src/Config/reactotronConfig';
import App from '~/Config/App';
import { store, persistor } from './src/Services/store';
const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <SafeAreaView style={{flex: 1}}>
        <App />
      </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Index;
