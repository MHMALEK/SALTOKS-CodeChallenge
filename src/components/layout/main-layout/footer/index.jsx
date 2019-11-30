import React from "react"
import PropTypes from "prop-types"
import "../style.scss"
const Footer = (props) => {
  const { children } = props
  return <footer className="main-layout--footer pt-3 pb-3 border">{children}</footer>
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Footer
