// Dependencies
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import BerandaProjectCard from "components/BerandaProjectCard";
import { Descriptions } from "antd";

const { Item } = Descriptions;

//Configure enzyme for React 17
Enzyme.configure({ adapter: new Adapter() });

// test("test your component", () => {
// 	const wrapper = mount(<App2 txt={"michaelangelo"} />);

// 	expect(wrapper.find("p").text()).toEqual("hi michaelangelo");
// });

describe(`Test ProjectCard component`, () => {
  const wrapper = shallow(<BerandaProjectCard category="Game" />);

  it(`Should render MyProjectCard`, () => {
    expect(wrapper).toMatchSnapshot();
  });
  it(`Should render category props`, () => {
    expect(wrapper.find({ "data-testid": "category" }).text()).toBe("Game");
  });
});
