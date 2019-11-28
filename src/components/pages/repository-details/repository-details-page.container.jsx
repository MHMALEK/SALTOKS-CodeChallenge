import React from "react"
import { connect } from "react-redux"
import RepositoryDetailsPageDumb from "./repository-details-page.dumb"

function RepositoryDetailsPageContainer(props) {
  return <RepositoryDetailsPageDumb {...props} />
}

const mapStateToProps = (state) => ({})
const MapDipatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  MapDipatchToProps
)(RepositoryDetailsPageContainer)
