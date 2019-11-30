import React from "react"
import { shallow, mount } from "enzyme"
import Loading from "./"

describe("Loading Test", () => {
  it("Should render default div", () => {
    const loading = shallow(<Loading />)
    expect(loading.type()).toBe("div")
  })

  it("Should contoller have loading animation", () => {
    const loading = mount(<Loading />)
    expect(loading.find("div").hasClass("loading-container")).toBe(true)
  })
})
