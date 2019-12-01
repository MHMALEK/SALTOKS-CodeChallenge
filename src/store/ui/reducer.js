import ActionTypes from './action-types';
import initialState from './initial-state';

const UiReducer = function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.NOTIFICATION_SHOWN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default UiReducer;
