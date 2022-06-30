import About from "./About";
import { shallow } from "enzyme";

describe("About page testing", () => {
  it("class check", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists(".h1cls")).toEqual(true);
  });

  it("state check", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.state()).toEqual({ name: "code improve", id: 111 });
  });

  it("html check", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true);
  });

  it("only msg check", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(
      true
    );
  });

  it("any msg check", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.containsAnyMatchingElements([<div>Hello</div>])).toEqual(
      true
    );
  });
});
