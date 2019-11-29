import React from "react"
import renderer from "react-test-renderer"
import HomePageDumb from "./home-page.dumb"
describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<HomePageDumb />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
