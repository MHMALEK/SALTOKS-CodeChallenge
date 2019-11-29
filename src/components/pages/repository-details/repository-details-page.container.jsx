import React from "react"
import { connect } from "react-redux"
import RepositoryDetailsPageDumb from "./repository-details-page.dumb"
import { requestRepositoryDetailsAction } from "Store/repository/actions"

function RepositoryDetailsPageContainer(props) {
  return <RepositoryDetailsPageDumb {...props} />
}

const mapStateToProps = (state) => ({
  repositoryData: state.Repository.repositoryData,
  readMeUrl: state.Repository.readMeUrl,
  readMeContent: state.Repository.content
})
const MapDipatchToProps = (dispatch) => ({
  requestRepositoryDetails: (url) => dispatch(requestRepositoryDetailsAction(url))
})

export default connect(
  mapStateToProps,
  MapDipatchToProps
)(RepositoryDetailsPageContainer)
