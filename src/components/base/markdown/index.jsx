import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"

export default function MarkDown(props) {
  const { source } = props
  return <ReactMarkdown source={source} />
}

MarkDown.propTypes = {
  source: PropTypes.string.isRequired
}
