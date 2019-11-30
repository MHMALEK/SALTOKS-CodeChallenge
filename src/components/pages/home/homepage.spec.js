import React from "react"
import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router-dom"
import HomePageDumb from "./home-page.dumb"
import { repositoriseSearchApi } from "../../../../__mocks__/server-repsonse"
describe("Home page Snappshot ", () => {
  const mockProps = {
    isLoading: true,
    repositoryTableData: {
      headers: [
        "full_name",
        "owner",
        "description",
        "url",
        "created_at",
        "updated_at",
        "watchers_count",
        "see complete repo details"
      ]
    },
    repositoriesData: {
      list: repositoriseSearchApi.items,
      pagesLink: {
        next: null,
        prev: null,
        first: null,
        last: null
      },
      incomplete_results: repositoriseSearchApi.incomplete_results,
      total_count: repositoriseSearchApi.total_count
    },
    requestRepositories: () => repositoriseSearchApi.mockFetch(),
    userStartTyping: () => console.log("isType"),
    goToPageAction: () => repositoriseSearchApi.mockFetch()
  }
  test("snapshot renders", () => {
    const component = renderer.create(
      <MemoryRouter>
        <HomePageDumb {...mockProps} />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
