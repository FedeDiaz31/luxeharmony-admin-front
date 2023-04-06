import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import teamReducer from "./teamReducer";
import clientsReducer from "./clientsReducer";
import ordersReducer from "./ordersReducer";
import productsReducer from "./productsReducer";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer,
  clients: clientsReducer,
  orders: ordersReducer,
  products: productsReducer,
  brands: brandsReducer,
  categories: categoriesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };
