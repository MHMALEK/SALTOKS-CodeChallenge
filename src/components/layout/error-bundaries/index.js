/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error) {
    // action log error in server
    // yield put(error)
    // send error to sentry or log in the server
  }

  componentDidCatch(_error, _info) {
    // send error to sentry
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>
            oops! looks something went wrong!! would you please REfresh the page
          </h1>
          <p>
            out team has been notified about error and we will work on it as soon as
            possible
          </p>
        </>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
}
export default ErrorBoundary
