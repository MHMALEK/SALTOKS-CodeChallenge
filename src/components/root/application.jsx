import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bootsrapAppAction } from "Store/app/actions"

export function Application(props) {
  const { children, bootsrapApp } = props
  bootsrapApp()
  return <> {children} </>
}

const mapDispatchToProps = (dispatch) => ({
  bootsrapApp: () => dispatch(bootsrapAppAction())
})

Application.propTypes = {
  bootsrapApp: PropTypes.func,
  children: PropTypes.node
}

export default connect(null, mapDispatchToProps)(Application)
