import React from "react"
import { connect } from "react-redux"
import HomePageDumb from "./home-page.dumb"
import {
  requestRepositoriesAction,
  startLoadingAfterUserTypeAction,
  goToPageAction,
  removeSearchResultsAction
} from "Store/repository/actions"
import { showNotificationAction } from "../../../store/ui/actions"
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
  fullRepositoriesData: state.Repository.repositoriesData,
  briefRepositoriesData: state.Repository.briefRepositoriesData
})
const mapDispatchToProps = (dispatch) => {
  return {
    requestRepositories: (query, page, sort, numberOfItemsPerPage) =>
      dispatch(requestRepositoriesAction(query, page, sort, numberOfItemsPerPage)),
    userStartTyping: () => dispatch(startLoadingAfterUserTypeAction()),
    goToPageAction: (query, page) => dispatch(goToPageAction(query, page)),
    showNotificationAction: (error) => dispatch(showNotificationAction(error)),
    removeSearchResultsAction: () => dispatch(removeSearchResultsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
