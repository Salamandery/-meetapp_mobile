import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import persistReducer from './persistReducers';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddlewares = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddlewares];

const store = createStore(persistReducer(rootReducer), middlewares);

const persistor = persistStore(store)

sagaMiddlewares.run(rootSaga);

export { store, persistor };