import React from "react"
import { connect } from "react-redux"
import HomePageDumb from "./home-page.dumb"
import {
  requestRepositoriesAction,
  startLoadingAfterUserTypeAction,
  goToPageAction
} from "Store/repository/actions"
class HomePageContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="home-page">
        <HomePageDumb {...this.props} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.Repository.isLoading,
  repositoryTableData: state.Repository.repositoryTableData,
  repositoriesData: state.Repository.repositoriesData
})
const mapDispatchToProps = (dispatch) => {
  return {
    requestRepositories: (query, page, sort, numberOfItemsPerPage) =>
      dispatch(requestRepositoriesAction(query, page, sort, numberOfItemsPerPage)),
    userStartTyping: () => dispatch(startLoadingAfterUserTypeAction()),
    goToPageAction: (query, page) => dispatch(goToPageAction(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
