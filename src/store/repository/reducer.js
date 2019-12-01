import ActionTypes from './action-types';

import initialState from './initial-state';

const RepositoryReducer = function(state = initialState, action) {
   switch (action.type) {
      case ActionTypes.REPOSITORIES_LIST_REQUESTED:
         return {
            ...state,
            query: action.payload.query,
            page: action.payload.page,
            numberOfItemsPerPage: action.payload.numberOfItemsPerPage,
            sort: action.payload.sort,
            isLoading: true,
            briefRepositoriesData: {
               list: [],
            },
         };

      case ActionTypes.REPOSITORIES_LIST_FULFILLED:
         return {
            ...state,
            isLoading: false,
            repositoriesData: action.payload.repositoriesData,
            briefRepositoriesData: {
               list: action.payload.repositoriesData.list.slice(0, 3),
            },
         };

      case ActionTypes.REPOSITORIES_LIST_FAILD:
         return {
            ...state,
            isLoading: false,
         };

      case ActionTypes.USER_STARTED_TYPE: {
         return {
            ...state,
            isLoading: true,
         };
      }

      case ActionTypes.BRIEF_RESULTS_REMOVED: {
         return {
            ...state,
            briefRepositoriesData: {
               list: [],
            },
            repositoriesData: {
               ...state.repositoriesData,
               list: [],
            },
         };
      }

      case ActionTypes.GO_TO_PAGE_ACTION:
         return {
            ...state,
            page: action.payload.page,
            query: action.payload.query,
         };

      case ActionTypes.UPDATE_DURATION_TIME:
         return {
            ...state,
            apiDurationToResponse: action.payload.apiDurationToResponse,
         };

      case ActionTypes.REPOSITORY_DETAILS_REQUESTED:
         return {
            ...state,
            isLoading: true,
         };

      case ActionTypes.REPOSITORY_DETAILS_FULFILLED:
         return {
            ...state,
            isLoading: false,
            repositoryData: action.payload.repositoryData,
            currentRepoProfileImage: action.payload.repositoryData.avatar_url,
         };

      case ActionTypes.REPOSITORY_DETAILS_FAILD:
         return {
            ...state,
            isLoading: false,
         };

      case ActionTypes.REPOSITORY_READ_ME_REQUESTED:
         return {
            ...state,
            isLoading: true,
            content: '',
            currentRepoProfileImage: null,
         };

      case ActionTypes.REPOSITORY_READ_ME_FULFILLED:
         return {
            ...state,
            isLoading: false,
            readMeUrl: action.payload.readMeUrl,
            content: action.payload.content,
            encoding: action.payload.encoding,
         };

      case ActionTypes.REPOSITORY_READ_ME_FAILD:
         return {
            ...state,
            isLoading: false,
         };

      default:
         return state;
   }
};

export default RepositoryReducer;
