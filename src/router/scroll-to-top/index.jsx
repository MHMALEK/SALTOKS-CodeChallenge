import React from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
}
export default withRouter(ScrollToTop)
