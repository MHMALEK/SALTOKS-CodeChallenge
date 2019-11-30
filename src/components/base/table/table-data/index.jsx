import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"

export default function TableData(props) {
  const { className, children } = props
  return (
    <td
      className={cx(
        "base-table--data border-grey-light border hover:bg-gray-100 p-3",
        className
      )}
    >
      <div>{children}</div>
    </td>
  )
}

TableData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node || PropTypes.func
}
