import Home from "../src/Home";
import { shallow } from "enzyme";

describe("shallo case test", () => {
  it("hello test", () => {
    let wrapper = shallow(<Home />);
    // console.log(wrapper.debug());
    expect(wrapper.exists(".homecls")).toEqual(true);
  });
});
