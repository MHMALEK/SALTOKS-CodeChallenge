import React from "react"
import BaseInput from "Components/base/input"
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
    // Debounce
    this.updateRepositoriesTable = debounce(
      this.updateRepositoriesTable,
      appOptions.debounceTimeForUserSearch
    )
    this.renderRows = this.renderRows.bind(this)
  }

  state = {
    query: ""
  }

  paginationAction(page) {
    const { goToPageAction, repositoryTableData } = this.props
    const { query } = this.state
    goToPageAction(query, repositoryTableData.pagesLink[page])
  }

  updateRepositoriesTable() {
    const { requestRepositories } = this.props
    const { query } = this.state
    requestRepositories(query)
  }

  handleOnChange(name, value) {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.updateRepositoriesTable()
      }
    )
  }
  renderRows() {
    const { repositoryTableData } = this.props
    if (repositoryTableData.list.length === 0) return null
    return repositoryTableData.list.map((repo) => (
      <TableRow key={repo.id}>
        {Object.keys(repo).map((dataKey) => {
          if (typeof repo[dataKey] === "object" && dataKey === "owner") {
            return <TableData>{repo[dataKey]["login"]}</TableData>
          }
          if (typeof repo[dataKey] === "boolean" && dataKey === "private") {
            return <TableData>{repo[dataKey] ? "yes" : "no"}</TableData>
          }
          return <TableData>{repo[dataKey]}</TableData>
        })}
      </TableRow>
    ))
  }

  render() {
    const { query } = this.state
    const { isLoading, repositoryTableData } = this.props

    return (
      <>
        <BaseInput onChange={this.handleOnChange} value={query} name="query" />
        <Table isLoading={isLoading} noItem={repositoryTableData.list.length === 0}>
          <TableHeader>
            <TableRow>
              {repositoryTableData.list.length > 0 &&
                Object.keys(repositoryTableData.list[0]).map((item) => (
                  <TableHead>{item}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody onScrollEnd={this.handleScrollEnd}>
            {this.renderRows()}
          </TableBody>
        </Table>
        <p onClick={() => this.paginationAction("next")}>next</p>
        <p onClick={() => this.paginationAction("prev")}>prev</p>
        <p onClick={() => this.paginationAction("last")}>last</p>
        <p onClick={() => this.paginationAction("first")}>first</p>
      </>
    )
  }
}
