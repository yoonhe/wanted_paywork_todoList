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

export const fetchEntity = <StartPayload, SuccessPayload>({
  entity,
  api,
}: Entity<SuccessPayload>) => {
  const { success, fail } = entity;

  return function* (action: PayloadAction<StartPayload>) {
    try {
      const response: SuccessPayload = yield call(api, action.payload);

      yield put(success(response));
    } catch (error) {
      yield put(fail((error as AxiosError).response?.data));
    }
  };
};
