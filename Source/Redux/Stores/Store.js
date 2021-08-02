import { createStore, combineReducers } from 'redux';
import AppReducer from '../Reducers/AppReducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersistConfig = {
  key: 'pristeem',
  storage: AsyncStorage,
  whitelist: ["app"]
}

const AllReducer = {
  app: AppReducer
}

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer)

const Stores = createStore(persistedReducer);
export const Persistor = persistStore(Stores)
export default Stores;
