const NOTIFICATION_TYPES = {
   ERROR: 'error',
   SUCCESS: 'success',
   INFO: 'info',
   WARN: 'warn',
};
export const ERROR_GETTING_DATA = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'there was an error fetching data',
};

export const ERROR_ON_APPLICATION_CODE = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'there is an error on our application! we will work on it!',
};

export const INVALID_QUERY = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'this is not a valid query. please search again with correct query',
};

export const TOO_MANY_REQUESTS = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'you have reached request limit. obtain a token or wait for another time',
};

export const INVALID_MEDIA_TYPE = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'the parameter you have sent is not supported. please try agian.',
};

export const VALIDATION_FAILD = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'the request you have sent is invalid.',
};

export const UNAUTHORIZED_USER = {
   type: NOTIFICATION_TYPES.ERROR,
   message: "you don't have authorization to access this api",
};

export const FORBIDEN_ACTION = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'API rate limit exceeded. ',
};

export const NOT_FOUND = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'the requested filed not found',
};

export const BAD_REQUEST = {
   type: NOTIFICATION_TYPES.ERROR,
   message: 'something wrong. please try again',
};
