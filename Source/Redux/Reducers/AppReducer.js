import Actions from '../Actions/AppActions';

let initialState = {
  user: {},
  authToken: null,
  isLogged: false,
  introCompleted: false,
  defaultActiveTab: 0,
  isFreshUser: false
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        user: action.data
      };
    case Actions.LOGOUT:
      return {
        ...state,
        isLogged: false,
        authToken: null,
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        authToken: action.data,
        isLogged: true
      };
    case Actions.MARK_INTRO_INCOMPLETE:
      return {
        ...state,
        introCompleted: false
      };
    case Actions.MARK_INTRO_COMPLETE:
      return {
        ...state,
        introCompleted: true
      };
    case Actions.SET_ACTIVE_TAB_INDEX:
      return {
        ...state,
        defaultActiveTab: action.data
      };
    case Actions.SET_USER_FUE:
      return {
        ...state,
        isFreshUser: action.data
      };
    default:
      return state;
  }
};

export default AppReducer;
