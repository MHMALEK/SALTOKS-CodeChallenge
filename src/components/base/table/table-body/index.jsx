import React from "react"
import PropTypes from "prop-types"
export default class TableBody extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return <tbody className="base-table--body">{children}</tbody>
  }
}

TableBody.propTypes = {
  children: PropTypes.node
}
