import React from "react"
import PropTypes from "prop-types"
function TableHeader(props) {
  const { children } = props
  return <thead className="base-table--header bg-teal-400 ">{children}</thead>
}

TableHeader.propTypes = {
  children: PropTypes.node
}

export default TableHeader
