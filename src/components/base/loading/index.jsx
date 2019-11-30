import React from "react"
import "./style.scss"
export default function BaseLoading() {
  return (
    <div className="mt-8 loading-container">
      <div className="loading-dots">
        <p className="mb-6">Wait a moment please! </p>
        <h1 className="dot one">.</h1>
        <h1 className="dot two">.</h1>
        <h1 className="dot three">.</h1>
      </div>
    </div>
  )
}
