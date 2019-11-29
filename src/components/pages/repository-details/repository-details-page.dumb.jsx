import React, { useEffect } from "react"
import PropTypes from "prop-types"
import LazyLoad from "Components/base/lazy-load"
import MarkDown from "Components/base/markdown"
import Card from "Components/base/card"
import Container from "Components/base/container"

function RepositoryDetailsPageDumb(props) {
  const {
    requestRepositoryDetails,
    readMeContent,
    isBase64,
    requestReadMeFileAction
  } = props

  useEffect(() => {
    const repoUrl = props.location.pathname
    requestRepositoryDetails(repoUrl)
  }, [])
  const style = {
    marginTop: 1000
  }

  const { repositoryData } = props

  return (
    <Container>
      <Card className="min-h-screen mt-6 mb-6">
        <div>
          {repositoryData &&
            Object.keys(repositoryData).map((key, index) => {
              if (key === "owner") {
                return Object.keys(key).map((item, index) => {
                  return <p key={index}>{key[item]} </p>
                })
              }
              return (
                <p key={index}>
                  {key}: {repositoryData[key]}
                </p>
              )
            })}
        </div>

        <p>dasd</p>
      </Card>
    </Container>
  )
}

RepositoryDetailsPageDumb.propTypes = {
  location: PropTypes.object,
  requestRepositoryDetails: PropTypes.func,
  requestReadMeFileAction: PropTypes.func,
  readMeContent: PropTypes.string,
  isBase64: PropTypes.bool,
  repositoryData: PropTypes.object
}

export default RepositoryDetailsPageDumb
