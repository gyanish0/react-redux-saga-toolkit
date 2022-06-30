import Artical from "./Artical";
import { shallow } from "enzyme";
import Table from "./Table";

describe("Artical page", () => {
  it("click count", () => {
    const wrapper = shallow(<Artical />);
    expect(wrapper.find(".clicks-0").length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-1").length).toEqual(1);
  });
  it("click 3 count", () => {
    const wrapper = shallow(<Artical />);
    expect(wrapper.find(".clicks-0").length).toEqual(1);
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-2").length).toEqual(1);
  });
  it("dive", () => {
    const wrapper = shallow(<Artical />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toEqual(1);
  });
});
