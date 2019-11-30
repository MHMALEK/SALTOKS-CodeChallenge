import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
export default function TableHead(props) {
  const { className, children } = props
  return <th className={cx("base-table--head", className)}>{children}</th>
}

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
