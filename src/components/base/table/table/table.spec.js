import React from "react"
import { mount } from "enzyme"
import Table from "./"

describe("Table Test", () => {
  it("Shouldn't have any children by default", () => {
    const table = mount(<Table />)
    expect(table.getDOMNode().children.length).toBe(0)
  })
})
