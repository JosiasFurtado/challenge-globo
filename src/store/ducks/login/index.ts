import { Reducer } from "redux";
import { LoginState, LoginTypes } from "./types";

const INITIAL_STATE: LoginState = {
  data: [],
  error: false,
  logged: false
};

const fakeData = [
  {
    id: "01",
    name: "Encontro c/ Fátima",
    descript:
      "Fátima Bernardes traz uma mistura de jornalismo, informação, humor e música. Com a participação de comentaristas, jornalistas e convidados especiais, os assuntos serão abordados pelo programa em forma de bate-papo.",
    img:
      "https://img.imirante.com.br/2019/02/12/1549984249-372696396-810x471.jpg"
  }
];

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOAD_REQUEST:
      return { ...state, logged: false };
    case LoginTypes.LOAD_SUCCESS:
      return {
        ...state,
        logged: true,
        error: false,
        data: fakeData
      };
    case LoginTypes.LOAD_FAILURE:
      return {
        ...state,
        logged: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
