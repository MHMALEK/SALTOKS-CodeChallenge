import React from "react"
import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router-dom"
import { Application } from "./Application"
import mockRedux from "../../../__mocks__/redux"
describe("SnappShot for Application", () => {
  const mockProps = {
    bootsrapApp: () => mockRedux()
  }
  test("snapshot renders", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Application {...mockProps} />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
