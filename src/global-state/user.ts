import { atom } from 'recoil';
import { APIresponse } from '../api/recommendations/types';

export interface userStateType {
  user_name: string;
  recommendations?: APIresponse;
}

const userInitialState: userStateType = {
  user_name: '',
}

export const userState = atom({
  key: 'userState',
  default: userInitialState,
});