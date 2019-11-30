import actionTypes from "./action-types"

export const bootsrapAppAction = () => ({
  type: actionTypes.APP_BOOTSTRAPED
})

export const installServiceWorkerAction = () => ({
  type: actionTypes.SERVICE_WORKER_INSTALLED
})

export const saveUserDefaultLanguageAction = (userDefaultLanguage) => ({
  type: actionTypes.USER_DEFAULT_LANGUAGE_SAVED,
  payload: {
    userDefaultLanguage
  }
})
