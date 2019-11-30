/* eslint-disable react/prop-types */
import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"

const Select = (props) => {
  const { children, name, className, onChange } = props
  return (
    <div className="inline-block relative w-64">
      <select
        name={name}
        className={cx(
          "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
          className
        )}
        onChange={onChange}
      >
        <option value="" disabled>
          Select One
        </option>

        {children &&
          children.map((item) => {
            return item
          })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  hasIcon: PropTypes.bool
}

Select.defaultProps = {
  onChange: null,
  children: <option disabled>Select</option>,
  name: "select",
  className: ""
}

export default Select
