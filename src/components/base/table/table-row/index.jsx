import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
function TableRow(props) {
  const { children, className } = props
  return <tr className={cx("base-table--row", className)}>{children}</tr>
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default TableRow
