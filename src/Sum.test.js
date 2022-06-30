test("my first test case", () => {
  let data = 10;
  expect(data).toBe(10);
});
it("should add two numbers", () => {
  let data = 13;
  expect(data).toBe(13);
});

const sum = require("../src/Sum");

// describe("run case test", () => {
//   test("hello test", () => {
//     let data = sum(1, 2);
//     expect(data).toEqual({ name: "sums" });
//   });
// });

describe("Update home page", () => {
  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should add two numbers not equal", () => {
    expect(sum(1, 2)).not.toBe(5);
  });
});
