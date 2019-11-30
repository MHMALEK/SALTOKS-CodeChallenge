import React from "react"
import { shallow } from "enzyme"
import LazyLoad from "./"

describe("MyComponent", () => {
  it("should render correctly ", () => {
    const component = shallow(
      <LazyLoad>
        <p>some file to load on scroll and when in viewport </p>
      </LazyLoad>
    )
    expect(component).toMatchSnapshot()
  })

  it("should  have a visiblity state for children", () => {
    const component = shallow(
      <LazyLoad>
        <p>some file to load on scroll when in viewport </p>
      </LazyLoad>
    )
    expect(component.instance().state.isElementOnViewPort).toEqual(false)
  })
})
