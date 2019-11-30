import React from "react"
import PropTypes from "prop-types"

const Container = (props) => {
  return <div className="container mx-auto">{props.children}</div>
}

Container.propTypes = {
  children: PropTypes.node
}
Container.defaultProps = {
  children: <p>card</p>
}

export default Container
