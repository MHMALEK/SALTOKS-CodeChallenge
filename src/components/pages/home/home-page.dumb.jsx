import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "Components/base/button"
import BaseInput from "Components/base/input"
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

import appOptions from "Src/options"
import { debounce } from "Utils/debounce"
export default class HomePageDumb extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.updateRepositoriesTable = this.updateRepositoriesTable.bind(this)
    this.paginationAction = this.paginationAction.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.isValidQuery = this.isValidQuery.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

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
      isTypeLoading: false
    }
  }

  paginationAction(page) {
    const { repositoriesData } = this.props
    this.setState(
      {
        page: repositoriesData.pagesLink[page]
      },
      () => {
        this.updateRepositoriesTable()
      }
    )
  }

  updateRepositoriesTable() {
    const { requestRepositories } = this.props
    const { query, page, sort, numberOfItemsPerPage } = this.state
    this.setState({
      isTypeLoading: false
    })
    requestRepositories(query, page, sort, numberOfItemsPerPage)
  }

  isValidQuery() {
    const { query } = this.state
    if (query === " " || query === "") {
      return false
    }
    return true
  }
  handleOnChange(e) {
    const { name, value } = e.target

    this.setState(
      {
        [name]: value,
        isTypeLoading: true
      },
      () => {
        if (this.isValidQuery()) {
          this.updateRepositoriesTable()
        } else {
          // to do: show Error
          this.setState({
            isTypeLoading: false
          })
        }
      }
    )
  }

  handleCancel() {
    this.setState({
      query: "",
      isTypeLoading: false
    })
  }

  renderRows() {
    const { repositoriesData } = this.props
    if (repositoriesData.list.length === 0) return null

    return repositoriesData.list.map((repo, index) => (
      <TableRow
        key={index}
        className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
      >
        {Object.keys(repo).map((dataKey, index) => {
          if (typeof repo[dataKey] === "object" && dataKey === "owner") {
            return (
              <TableData
                className="border-grey-light border hover:bg-gray-100 p-3"
                key={index}
              >
                {repo[dataKey]["login"]}
              </TableData>
            )
          }
          return (
            <TableData
              className="border-grey-light border hover:bg-gray-100 p-3"
              key={index}
            >
              {repo[dataKey]}
            </TableData>
          )
        })}
        <TableData
          className="border-grey-light border hover:bg-gray-100 p-3"
          key={index * index}
        >
          <Link to={`repos/${repo.full_name}`}> click here </Link>
        </TableData>
      </TableRow>
    ))
  }

  render() {
    const { query, isTypeLoading } = this.state
    const { isLoading, repositoryTableData, repositoriesData } = this.props
    return (
      <>
        <div className="container mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <BaseInput
              onChange={this.handleOnChange}
              value={query}
              name="query"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Start Typing to Search on Github Repos"
              aria-label="Full name"
            />

            <Button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={this.handleCancel}
            >
              clear
            </Button>
          </div>

          <div className="filter-wrapper m-3 ">
            <p className="title mb-3">sort by</p>
            <div className="mb-6 inline-block relative w-64">
              <Select
                onChange={this.handleOnChange}
                name="sort"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="best_match">best_match</option>
                <option value="stars">stars</option>
                <option value="forks">forks</option>
                <option value="help-wanted-issues">help-wanted-issues</option>
                <option value="updated">updated</option>
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <p className="title mb-3">number to show per page</p>
            <div className="inline-block relative w-64">
              <Select
                onChange={this.handleOnChange}
                name="numberOfItemsPerPage"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {isLoading ||
            (isTypeLoading && (
              <div className="loading-wrapper flex item-center justify-center">
                <Loading />
              </div>
            ))}

          {repositoriesData.list.length > 0 && (
            <>
              <Table
                className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-x-auto overflow-y-hidden sm:shadow-lg my-5"
                isLoading={isLoading}
              >
                <TableHeader className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none  sm:mb-0">
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

              <div className="inline-flex">
                <Button
                  disabled={!repositoriesData.pagesLink.first}
                  onClick={() => this.paginationAction("first")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  first
                </Button>

                <Button
                  disabled={!repositoriesData.pagesLink.prev}
                  onClick={() => this.paginationAction("prev")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"
                    />
                  </svg>
                  <span>prev</span>
                </Button>
                <Button
                  disabled={!repositoriesData.pagesLink.next}
                  onClick={() => this.paginationAction("next")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l flex"
                >
                  <span>next </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
                    />
                  </svg>
                </Button>
                <Button
                  disabled={!repositoriesData.pagesLink.last}
                  onClick={() => this.paginationAction("last")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  last
                </Button>
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}

HomePageDumb.propTypes = {
  goToPageAction: PropTypes.func,
  repositoryTableData: PropTypes.object,
  repositoriesData: PropTypes.object,
  requestRepositories: PropTypes.func,
  isLoading: PropTypes.bool
}
