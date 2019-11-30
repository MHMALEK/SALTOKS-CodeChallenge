import React from "react"
import PropTypes from "prop-types"

export default function Input(props) {
  const { className, value, name, onChange } = props
  return (
    <input
      {...props}
      onChange={onChange ? onChange : null}
      value={value}
      className={`input bg-gray appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ${className}`}
      name={name}
    />
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Input.defaultProps = {
  onChange: null,
  className: "",
  disabled: false,
  value: "",
  name: "input-text-no-name"
}
