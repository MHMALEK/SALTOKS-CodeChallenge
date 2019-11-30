import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
function Card(props) {
  const { children, className } = props
  return <div className={cx(" border shadow", className)}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
export default Card
