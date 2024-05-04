import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import exampleReducer from "./example";
import rootSaga from "./rootSaga";
import testReducer from "./test";
import darkModeReducer from "./darkMode";

const sagaMiddleware = createSagaMiddleware();
// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
//     whitelist: ["comments", "posts"],
// };
// const persistedReducer = persistReducer(persistConfig, testReducer);

export const store = configureStore({
    devTools: process.env.NODE_ENV === "development",
    reducer: {
        example: exampleReducer,
        test: testReducer,
        darkMode: darkModeReducer,
        // persist: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
