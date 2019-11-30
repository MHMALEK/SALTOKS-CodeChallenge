import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

const Button = (props) => {
  const { children, onClick, disabled, className, type } = props
  return (
    <button
      className={cx("base-button", className)}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

Button.defaultProps = {
  className: "",
  children: "button",
  onClick: null,
  disabled: false,
  type: "button"
}

export default Button
