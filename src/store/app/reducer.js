import ActionTypes from "./action-types"
import initialState from "./initial-state"

const AppReducer = function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.APP_BOOTSTRAPED:
      return {
        ...state
      }
    case ActionTypes.USER_DEFAULT_LANGUAGE_SAVED:
      return {
        ...state,
        userDefaultLanguage: action.payload.userDefaultLanguage
      }

    default:
      return state
  }
}

export default AppReducer
