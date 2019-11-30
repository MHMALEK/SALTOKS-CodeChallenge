import React from "react"
import { shallow, mount } from "enzyme"
import Button from "./"

const mockProps = {
  onClick: () => {}
}
describe("Button", () => {
  it("Should render default text Button", () => {
    const btn = shallow(<Button {...mockProps}>Button</Button>)

    expect(btn.text()).toBe("Button")
  })

  it("Should render button tag", () => {
    const btn = shallow(<Button {...mockProps}>Snapp Website</Button>)
    expect(btn.type()).toBe("button")
  })

  it("Should receive button type correctly", () => {
    const btn = mount(
      <Button {...mockProps} type="reset">
        Reset
      </Button>
    )

    expect(btn.getDOMNode().attributes.getNamedItem("type").value).toBe("reset")
  })
})
