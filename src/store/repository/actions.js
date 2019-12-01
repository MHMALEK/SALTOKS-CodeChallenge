import ActionTypes from './action-types';

export const requestRepositoriesAction = (
    query,
    page,
    sort,
    numberOfItemsPerPage
) => ({
  type: ActionTypes.REPOSITORIES_LIST_REQUESTED,
  payload: {
    query,
    page,
    sort,
    numberOfItemsPerPage,
  },
});

export const requestRepositoriesFulfiled = (repositoriesData) => ({
  type: ActionTypes.REPOSITORIES_LIST_FULFILLED,
  payload: {
    repositoriesData,
  },
});

export const requestRepositoriesFaild = () => ({
  type: ActionTypes.REPOSITORIES_LIST_FAILD,
});

export const startLoadingAfterUserTypeAction = () => ({
  type: ActionTypes.USER_STARTED_TYPE,
});

export const goToPageAction = (query, page, sort, numberOfItemsPerPage) => ({
  type: ActionTypes.GO_TO_PAGE_ACTION,
  payload: {
    query,
    page,
    sort,
    numberOfItemsPerPage,
  },
});

export const updateDurationTimeForApiResponse = (apiDurationToResponse) => ({
  type: ActionTypes.UPDATE_DURATION_TIME,
  payload: {
    apiDurationToResponse,
  },
});

export const requestRepositoryDetailsAction = (repoUrl) => ({
  type: ActionTypes.REPOSITORY_DETAILS_REQUESTED,
  payload: {
    repoUrl,
  },
});

export const requestRepositoryDetailsFulfiled = (repositoryData) => ({
  type: ActionTypes.REPOSITORY_DETAILS_FULFILLED,
  payload: {
    repositoryData,
  },
});

export const requestRepositoryDetailsFaild = () => ({
  type: ActionTypes.REPOSITORY_DETAILS_FAILD,
});

export const requestReadMeFileAction = (repoUrl) => ({
  type: ActionTypes.REPOSITORY_READ_ME_REQUESTED,
  payload: {
    repoUrl,
  },
});

export const requestReadMeFileFulFilled = (readMeUrl, content, encoding) => ({
  type: ActionTypes.REPOSITORY_READ_ME_FULFILLED,
  payload: {
    readMeUrl,
    content,
    encoding,
  },
});

export const requestReadMeFileFaild = () => ({
  type: ActionTypes.REPOSITORY_READ_ME_FAILD,
});

export const removeSearchResultsAction = () => ({
  type: ActionTypes.BRIEF_RESULTS_REMOVED,
});
