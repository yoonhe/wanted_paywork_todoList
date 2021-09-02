import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';

interface Entity<Success> {
  entity: {
    success: ActionCreatorWithPayload<Success>;
    fail: ActionCreatorWithPayload<AxiosError>;
  };
  api: any;
}

export const createSaga = <Start, Success>({
  entity,
  api,
}: Entity<Success>) => {
  const { success, fail } = entity;

  return function* (action: PayloadAction<Start>) {
    try {
      const response: Success = yield call(api, action.payload);

      yield put(success(response));
    } catch (error) {
      yield put(fail((error as AxiosError).response?.data));
    }
  };
};
