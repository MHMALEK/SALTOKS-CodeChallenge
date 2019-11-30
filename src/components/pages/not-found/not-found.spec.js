import React from "react"
import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router-dom"
import NotFound from "./not-found"
describe("Not Found page Snappshot ", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
