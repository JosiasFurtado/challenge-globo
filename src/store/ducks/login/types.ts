export enum LoginTypes {
  LOAD_REQUEST = "@login/LOAD_REQUEST",
  LOAD_SUCCESS = "@login/LOAD_SUCCESS",
  LOAD_FAILURE = "@login/LOAD_FAILURE"
}

// Data types

export interface Login {
  undefined;
}

// State type

export interface LoginState {
  readonly data: Login[];
  readonly logged: boolean;
  readonly error: boolean;
}
