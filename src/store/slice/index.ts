import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'store/sagas';
import todoListSlice from './todoListSlice';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  middleware: [sagaMiddleWare],
  reducer: {
    todoList: todoListSlice.reducer,
  },
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
