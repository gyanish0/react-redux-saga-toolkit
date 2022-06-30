import Blog from "./Blog";
import { shallow } from "enzyme";

describe("Blog page testing", () => {
  it("find check", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find(".licls").length).toBe(3);
  });

  it("value check at& key", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find(".licls").at(0).key()).toBe("angular");
  });

  it("chiled check ", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find(".numbers").childAt(0).type()).toBe("span");
  });

  it("chiled check length ", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find("ul").children().length).toBe(3);
  });

  it("hash class check  ", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find(".my-button").hasClass("disabled")).toBe(true);
  });

  it("is class check  ", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.is(".maincls")).toBe(true);
  });
});
