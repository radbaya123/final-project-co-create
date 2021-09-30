import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Descriptions, Button, Card, Space } from "antd";

import MyProjectCard from "./MyProject";

Enzyme.configure({ adapter: new Adapter() });

describe("MyProjectCard", () => {
  const wrapper = mount(<MyProjectCard />);q
  it("should render my component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Button component is 2", function () {
    expect(wrapper.find(Button).length).toBe(2);
    console.log(wrapper.debug())
  });
});

// describe("Test untuk MyProject component", () => {
//   const wrapper = shallow(<MyProject>Coba-coba</MyProject>);

//   it("Check apakah component ini di render dengan baik", () => {
//     expect(wrapper.find("h5").text()).toEqual("Coba-coba");
//   });
// it("Check apakah component punya 2 tag button", () => {
//   expect(wrapper.find("Button").text()).toHaveLength(2);
// });
// });