import { put, takeEvery, takeLatest } from "redux-saga/effects"
import ActionTypes from "./action-types"
import {
  getRepositoriesHttpRequest,
  repositoryDetailsHttpRequest,
  repositoryReadMeHttpRequest
} from "./http-requests"
import callApiEndpoint from "Store/utils/call-api-endpoint"
import {
  requestRepositoriesFaild,
  requestRepositoriesFulfiled,
  requestRepositoryDetailsFulfiled,
  requestRepositoryDetailsFaild,
  requestReadMeFileFulFilled,
  requestReadMeFileFaild
} from "./actions"
import {
  MapRepoTableData,
  MapTimesToRelativeTimes,
  MapTimesToRelativeTimesForRepoDetails,
  convertToHumanReadable
} from "Utils/mapping"
import githubLinkParser from "Utils/github-link-parser"
import convertBase64ToString from "Utils/base64"
import { showNotificationAction } from "../ui/actions"
import { ERROR_ON_APPLICATION_CODE } from "../../utils/notification-messages"

function* requestRepositoriesSaga(action) {
  const { query, page, sort, numberOfItemsPerPage } = action.payload
  try {
    const response = yield callApiEndpoint(
      getRepositoriesHttpRequest,
      query,
      page,
      sort,
      numberOfItemsPerPage
    )

    const { items, total_count, incomplete_results } = response.data
    const { link } = response.headers

    let links = (link && githubLinkParser(link)) || {}
    const dataToSaveToStore = {
      list: MapRepoTableData(MapTimesToRelativeTimes(items)),
      pagesLink: {
        next: links.next || null,
        prev: links.prev || null,
        first: links.first || null,
        last: links.last || null
      },
      total_count,
      incomplete_results
    }
    yield put(requestRepositoriesFulfiled(dataToSaveToStore))
  } catch (e) {
    if (!e.response && !e.response.status) {
      yield put(showNotificationAction(ERROR_ON_APPLICATION_CODE))
    }
    yield put(requestRepositoriesFaild())
  }
}

function* requestRepositoryDetailsSaga(action) {
  const { repoUrl } = action.payload
  try {
    const response = yield callApiEndpoint(repositoryDetailsHttpRequest, repoUrl)

    const dataToSaveToStore = convertToHumanReadable(
      MapTimesToRelativeTimesForRepoDetails(response.data)
    )

    yield put(requestRepositoryDetailsFulfiled(dataToSaveToStore))
  } catch (e) {
    if (!e.response && !e.response.status) {
      yield put(showNotificationAction(ERROR_ON_APPLICATION_CODE))
    }
    yield put(requestRepositoryDetailsFaild())
  }
}

function* requestRepositoryReadMeSaga(action) {
  const { repoUrl } = action.payload
  try {
    const response = yield callApiEndpoint(repositoryReadMeHttpRequest, repoUrl)
    const { download_url, content, encoding } = response.data
    let decodeContent
    if (encoding === "base64") {
      decodeContent = convertBase64ToString(content)
    }
    yield put(requestReadMeFileFulFilled(download_url, decodeContent, encoding))
  } catch (e) {
    if (!e.response && !e.response.status) {
      yield put(showNotificationAction(ERROR_ON_APPLICATION_CODE))
    }
    yield put(requestReadMeFileFaild())
  }
}

export default [
  takeEvery(ActionTypes.REPOSITORIES_LIST_REQUESTED, requestRepositoriesSaga),
  takeLatest(ActionTypes.REPOSITORY_DETAILS_REQUESTED, requestRepositoryDetailsSaga),
  takeLatest(ActionTypes.REPOSITORY_READ_ME_REQUESTED, requestRepositoryReadMeSaga)
]
