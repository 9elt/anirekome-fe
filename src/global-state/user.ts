import { atom } from 'recoil';

export interface userStateType {
  name: string;
  statistics?: userStatsType;
  recommendations?: userRecosType;
}

export interface userStatsType {
  list: number;
}

export interface userRecosType {
  users: userUserRecosType[];
  anime: userAnimeRecosType[];
}

export interface userAnimeRecosType {
  id: number;
  title: string;
  picture: string;
  genres: string[];
  score: { val: number; s: number; d: number };
  user: number;
}

export interface userUserRecosType {
  name: string;
  offuscated: boolean;
  affinity: {
    val: number;
    s: number;
    d: number;
  };
  shared: {
    val: number;
    list: number;
    to: number;
  };
}

const userInitialState: userStateType = { name: '' }

export const userState = atom({
  key: 'userState',
  default: userInitialState,
});