import React from "react"
import { connect } from "react-redux"
import RepositoryDetailsPageDumb from "./repository-details-page.dumb"
import {
  requestRepositoryDetailsAction,
  requestReadMeFileAction
} from "Store/repository/actions"

function RepositoryDetailsPageContainer(props) {
  return <RepositoryDetailsPageDumb {...props} />
}

const mapStateToProps = (state) => ({
  repositoryData: state.Repository.repositoryData,
  readMeUrl: state.Repository.readMeUrl,
  readMeContent: state.Repository.content,
  profileImageSrc: state.Repository.currentRepoProfileImage
})
const MapDipatchToProps = (dispatch) => ({
  requestRepositoryDetails: (url) => dispatch(requestRepositoryDetailsAction(url)),
  requestReadMeFileAction: (repoUrl) => dispatch(requestReadMeFileAction(repoUrl))
})

export default connect(
  mapStateToProps,
  MapDipatchToProps
)(RepositoryDetailsPageContainer)
