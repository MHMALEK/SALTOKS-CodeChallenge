import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Card from "Components/base/card"
import Container from "Components/base/container"
import LazyLoad from "Components/base/Lazy-load"
import Markdown from "Components/base/markdown"
import Loading from "Components/base/loading"
import ProfileImage from "Components/base/profile-image"
import { convertObjectKeys } from "../../../utils/objectUtils"

function RepositoryDetailsPageDumb(props) {
  const {
    requestRepositoryDetails,
    repositoryData,
    readMeContent,
    requestReadMeFileAction,
    profileImageSrc
  } = props

  useEffect(() => {
    const repoUrl = props.location.pathname
    requestRepositoryDetails(repoUrl)
  }, [])

  const handleReadMeLazyLoad = () => {
    const repoUrl = props.location.pathname
    requestReadMeFileAction(repoUrl)
  }

  return (
    <Container>
      <Card className="mt-6 mb-6">
        <div className="p-6 leading-loose">
          <div className="min-h-screen">
            {repositoryData ? (
              convertObjectKeys(repositoryData).map((repodataKey, index) => {
                return (
                  <div key={index} className="mt-3 mb-3">
                    <span className="text-white bg-teal-500 pb-1 pt-1 pr-2 pl-2 rounded">
                      {repodataKey}
                    </span>
                    <span> : </span>
                    {typeof repositoryData[repodataKey] === "string" &&
                    repositoryData[repodataKey].startsWith("http") ? (
                      <a
                        className="text-blue-500"
                        href={repositoryData[repodataKey]}
                      >
                        click to see the page
                      </a>
                    ) : (
                      <span> {repositoryData[repodataKey]} </span>
                    )}
                  </div>
                )
              })
            ) : (
              <div className="loading-wrapper mt-9 justify-center items-center min-h-screen">
                <Loading />
              </div>
            )}
          </div>

          <LazyLoad
            onItemShownOnViewPort={handleReadMeLazyLoad}
            placeholder={<p>readMePlaceHolder</p>}
          >
            <h2 className="text-2xl text-green-500">Read Me File</h2>
            {readMeContent ? (
              <Markdown source={readMeContent} />
            ) : (
              <p> loading ReadeMe File from Api</p>
            )}
          </LazyLoad>
          <LazyLoad>
            <ProfileImage src={profileImageSrc}></ProfileImage>
          </LazyLoad>
        </div>
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
  repositoryData: PropTypes.object,
  profileImageSrc: PropTypes.string
}

export default RepositoryDetailsPageDumb
