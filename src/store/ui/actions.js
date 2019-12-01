import ActionTypes from './action-types';

export const showNotificationAction = (errorPayload) => {
  return {
    type: ActionTypes.NOTIFICATION_SHOWN,
    payload: errorPayload,
  };
};
