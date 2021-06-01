import { compose, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
const pertistedReducer = persistReducer(
  {
    key: "root",
    storage: storage,
    blacklist: ["listApi", "isLoading"],
  },
  reducers
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(pertistedReducer, composeEnhancers());
export const persistor = persistStore(store);
