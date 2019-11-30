import React from "react"
import cx from "classnames"
import Loading from "components/base/loading"
import PropTypes from "prop-types"

export default function Table(props) {
  const { isLoading, className, children } = props
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <Loading size="16px" />
        </div>
      )}
      <table className={cx(className, "w-full")}>{children}</table>
    </>
  )
}

Table.propTypes = {
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

Table.defaultProps = {
  isLoading: false,
  className: "",
  children: ""
}
