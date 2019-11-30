import React from "react"
import "./style.scss"
export default function BaseLoading() {
  return (
    <div className="mt-8 loading-container">
      <span className="loading-dots">
        <p className="mb-6 text-red-600">Wait a moment please... </p>
        <h1 className="dot one text-4xl">.</h1>
        <h1 className="dot two text-4xl">.</h1>
        <h1 className="dot three text-4xl">.</h1>
      </span>
    </div>
  )
}
