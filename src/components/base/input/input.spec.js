import React from "react"
import { shallow, mount } from "enzyme"
import Input from "./"

const mockProps = {
  onChange: () => {
    console.log("mock event change handler")
  }
}
describe("Input Test", () => {
  it("Should render default text", () => {
    const input = shallow(<Input {...mockProps} value="malekkk" />)
    expect(input.get(0).props.value).toBe("malekkk")
  })

  it("Should render input tag", () => {
    const input = shallow(<Input {...mockProps} />)
    expect(input.type()).toBe("input")
  })

  it("Should receive input type correctly", () => {
    const input = mount(<Input {...mockProps} type="password" />)

    expect(input.getDOMNode().attributes.getNamedItem("type").value).toBe("password")
  })

  it("Should contoller OnChange works only from parent", () => {
    const input = mount(<Input {...mockProps} />)
    input.find("input").simulate("change", {
      target: {
        value: "maleek"
      }
    })
    expect(input.get(0).props.value).toBe("") // it should not react to onchange event (not change value)
  })
})
