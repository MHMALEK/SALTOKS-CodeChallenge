// import dependencies and modules
import { hot } from "react-hot-loader/root"
import React from "react"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

// import files and components
import Application from "./application"
import store from "Store"
import RouterHandler from "Src/router"
import ErrorBoundary from "Components/layout/error-bundaries"

import "./style.scss"
import "react-toastify/dist/ReactToastify.min.css"

const Root = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ToastContainer />
        <Application>
          <RouterHandler />
        </Application>
      </ErrorBoundary>
    </Provider>
  )
}

export default hot(Root)
