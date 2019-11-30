import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import Button from "Components/base/button"
import Input from "Components/base/input"
import Select from "Components/base/select"
import Loading from "Components/base/loading"

import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow
} from "Components/base/table"
import { INVALID_QUERY } from "../../../utils/notification-messages"

import appOptions from "Src/options"
import { debounce } from "Utils/debounce"

import * as styles from "./style.scss" // use css Modules for this componetn
import { convertObjectKeys } from "../../../utils/objectUtils"

class HomePageDumb extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.updateRepositoriesTable = this.updateRepositoriesTable.bind(this)
    this.paginationAction = this.paginationAction.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.disableShowMore = this.disableShowMore.bind(this)
    this.hasntAnyResult = this.hasntAnyResult.bind(this)
    this.isNotValidQuery = this.isNotValidQuery.bind(this)
    this.isQueryEmpty = this.isQueryEmpty.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.closeSearchBox = this.closeSearchBox.bind(this)

    // Debounce
    this.updateRepositoriesTable = debounce(
      this.updateRepositoriesTable,
      appOptions.debounceTimeForUserSearch
    )

    this.state = {
      query: "",
      page: null,
      sort: null,
      numberOfItemsPerPage: null,
      isTypeLoading: false,
      showBriefResulst: false,
      briefResulst: []
    }
  }

  componentDidUpdate(props) {
    if (
      props.fullRepositoriesData.list &&
      props.fullRepositoriesData.list.length > 0
    ) {
      //show indicator
    }
  }

  paginationAction(page) {
    const { fullRepositoriesData } = this.props
    this.setState(
      {
        page: fullRepositoriesData.pagesLink[page]
      },
      () => {
        this.updateRepositoriesTable()
      }
    )
  }

  updateRepositoriesTable() {
    const { requestRepositories, showNotificationAction } = this.props
    const { query, page, sort, numberOfItemsPerPage } = this.state
    this.setState({
      isTypeLoading: false
    })

    if (this.isNotValidQuery()) {
      this.setState({
        isTypeLoading: false
      })
      showNotificationAction(INVALID_QUERY)
      return
    }
    if (this.isQueryEmpty()) {
      this.setState({
        isTypeLoading: false
      })
      return
    }
    requestRepositories(query, page, sort, numberOfItemsPerPage)
  }

  isQueryEmpty() {
    const { query } = this.state
    if (query === " " || query === "") {
      return true
    }
    return false
  }
  isNotValidQuery() {
    const { query } = this.state
    // eslint-disable-next-line no-useless-escape
    const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    if (regex.test(query)) {
      return true
    }
    return false
  }
  handleOnChange(e) {
    const { removeSearchResultsAction } = this.props
    const { name, value } = e.target
    this.setState(
      {
        [name]: value,
        isTypeLoading: true
      },
      () => {
        if (this.state.query.length > 0) {
          if (name === "query") {
            this.setState({
              showBriefResulst: true
            })
          }
          this.updateRepositoriesTable()
        } else {
          removeSearchResultsAction()
          this.closeSearchBox()
        }
      }
    )
  }

  handleCancel() {
    this.setState({
      query: "",
      isTypeLoading: false
    })
    this.closeSearchBox()
  }

  closeSearchBox() {
    this.setState(() => ({
      showBriefResulst: false
    }))
  }

  renderRows() {
    const { fullRepositoriesData } = this.props

    if (fullRepositoriesData.list.length === 0) return null

    return fullRepositoriesData.list.map((repo, index) => (
      <TableRow
        key={index}
        className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
      >
        {convertObjectKeys(repo).map((dataKey, index) => {
          if (typeof repo[dataKey] === "object" && dataKey === "owner") {
            return (
              <TableData className="break-all" key={index}>
                <span>{repo[dataKey]["login"]}</span>
              </TableData>
            )
          }

          return (
            <TableData className=" break-all" key={index}>
              <span>{repo[dataKey]}</span>
            </TableData>
          )
        })}
        <TableData className=" break-all" key={index * index}>
          <Link to={`repos/${repo.full_name}`}> click to show </Link>
        </TableData>
      </TableRow>
    ))
  }

  disableShowMore() {
    const { fullRepositoriesData, briefRepositoriesData } = this.props
    if (fullRepositoriesData.list.length === 0) return true
    return briefRepositoriesData.list.length >= fullRepositoriesData.list.length
  }

  hasntAnyResult() {
    const { query, isTypeLoading } = this.state
    const { isLoading, fullRepositoriesData } = this.props
    if (
      // if user wasn't typing or api completed show him no result
      !isLoading &&
      !isTypeLoading &&
      query.length > 0 &&
      fullRepositoriesData.list.length === 0
    ) {
      return true
    }
    return false
  }

  renderNoResult() {
    const { query, isTypeLoading } = this.state
    const { isLoading, fullRepositoriesData } = this.props
    if (
      // if user wasn't typing or api completed show him no result
      !isLoading &&
      !isTypeLoading &&
      query.length > 0 &&
      fullRepositoriesData.list.length === 0
    ) {
      return (
        <div className={styles.noItemWrapper}>
          <p>Sorry, the search doesnt have any result:(</p>
        </div>
      )
    }
  }

  render() {
    const { query, showBriefResulst, isTypeLoading } = this.state
    const {
      isLoading,
      repositoryTableData,
      fullRepositoriesData,
      briefRepositoriesData
    } = this.props

    const { resultWrapper, resultItem, showAllOfResultsBtn } = styles

    return (
      <>
        <div className="container mx-auto">
          <div className="flex mt-5 pb-5 relative border-b-2 border-teal-500 py-2">
            <Input
              onChange={this.handleOnChange}
              value={query}
              name="query"
              type="text"
              placeholder="Start Typing to Search on Github Repos"
              aria-label="repo name"
            />

            <Button
              className="flex-shrink-0 border-transparent text-teal-500 "
              type="button"
              onClick={this.handleCancel}
            >
              {this.state.showBriefResulst ? "X" : "clear"}
            </Button>

            {this.state.showBriefResulst && (
              <div className={`${resultWrapper} rounded bg-white border`}>
                {(isTypeLoading || isLoading) && (
                  <div className="loading-wrapper mt-6 mb-6  mx-auto">
                    <div className="loading-wrapper flex items-center justify-center">
                      <Loading />
                    </div>
                  </div>
                )}
                <div className="result-items-wrapper">
                  {!isTypeLoading &&
                    !isLoading &&
                    briefRepositoriesData.list.map((repo, index) => (
                      <Link key={index} to={`repos/${repo.full_name}`}>
                        <div
                          className={`${resultItem} text-teal-500 flex items-center pl-5 jusify-center border border-grey`}
                        >
                          {repo.full_name}
                        </div>
                      </Link>
                    ))}
                  {!isTypeLoading &&
                    !isLoading &&
                    briefRepositoriesData.list.length > 0 && (
                      <Button
                        onClick={this.closeSearchBox}
                        className={`${showAllOfResultsBtn} flex bg-teal-500 justify-center items-center pt-6 pb-8 text-white`}
                        disabled={this.disableShowMore()}
                      >
                        show all of the results ...
                      </Button>
                    )}
                  {this.renderNoResult()}
                </div>
              </div>
            )}
          </div>

          <div className="filter-wrapper mt-8 ml-2 flex jusify-center items-center">
            <div>
              <p className="title mb-3">sort by</p>
              <Select onChange={this.handleOnChange} name="sort">
                <option value="best_match">best_match</option>
                <option value="stars">stars</option>
                <option value="forks">forks</option>
                <option value="help-wanted-issues">help-wanted-issues</option>
                <option value="updated">updated</option>
              </Select>
            </div>
            <div className="ml-5">
              <p className="title mb-3 ">number to show per page</p>
              <Select onChange={this.handleOnChange} name="numberOfItemsPerPage">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="results-wrapper mt-5 ml-2">
            {fullRepositoriesData.list.length > 0 && !showBriefResulst && (
              <>
                <p className="mb-5">
                  we have found
                  <span className="text-red-600">
                    {fullRepositoriesData.list.length > 0
                      ? fullRepositoriesData.total_count
                      : 0}
                  </span>
                  results for you
                </p>
                <Table isLoading={isLoading}>
                  <TableHeader>
                    <TableRow>
                      {repositoryTableData.headers.length > 0 &&
                        repositoryTableData.headers.map((item, index) => (
                          <TableHead className="p-3 border text-left" key={index}>
                            {item}
                          </TableHead>
                        ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="flex-1 sm:flex-none">
                    {this.renderRows()}
                  </TableBody>
                </Table>

                <div className="pagination-wrapper flex items-center mb-6 mt-6 justify-center">
                  <div className="inline-flex">
                    <Button
                      disabled={!fullRepositoriesData.pagesLink.first}
                      onClick={() => this.paginationAction("first")}
                      className={`${showAllOfResultsBtn} bg-gray-300 hover:bg-gray-400  py-2 px-4 flex rounded-l`}
                    >
                      first
                    </Button>

                    <Button
                      disabled={!fullRepositoriesData.pagesLink.prev}
                      onClick={() => this.paginationAction("prev")}
                      className={`${showAllOfResultsBtn} bg-gray-300 hover:bg-gray-400  py-2 px-4 flex`}
                    >
                      <span>prev</span>
                    </Button>
                    <Button
                      disabled={!fullRepositoriesData.pagesLink.next}
                      onClick={() => this.paginationAction("next")}
                      className={`${showAllOfResultsBtn} bg-gray-300 hover:bg-gray-400  py-2 px-4 flex`}
                    >
                      <span>next </span>
                    </Button>
                    <Button
                      disabled={!fullRepositoriesData.pagesLink.last}
                      onClick={() => this.paginationAction("last")}
                      className={`${showAllOfResultsBtn} bg-gray-300 hover:bg-gray-400  py-2 px-4 rounded-r`}
                    >
                      last
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

HomePageDumb.propTypes = {
  goToPageAction: PropTypes.func,
  repositoryTableData: PropTypes.object,
  fullRepositoriesData: PropTypes.object,
  requestRepositories: PropTypes.func,
  isLoading: PropTypes.bool,
  showNotificationAction: PropTypes.func,
  briefRepositoriesData: PropTypes.object,
  removeSearchResultsAction: PropTypes.func
}

HomePageDumb.defaultProps = {
  repositoryTableData: [],
  fullRepositoriesData: {
    list: []
  },
  isLoading: false,
  briefRepositoriesData: {
    list: []
  }
}

export default HomePageDumb
