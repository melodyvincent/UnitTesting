const functions = require("./functions");

//Checking to be a value
test("add should return 4 when passed 2 and 2", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//Checking not to be a value
test("add should not return 7 when passed 3 and 3", () => {
  expect(functions.add(3, 3)).not.toBe(7);
});

//check to be a null value
test("isNull should not return a value", () => {
  expect(functions.isNull()).toBeNull();
});

//Check for undefined value
test("isUndefined should return an undefined value", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

// Check for a truthy value
test("isTruthy should; return a true vale", () => {
  expect(functions.isTruthy()).toBeTruthy;
});

//Check for falsy value
test("isFalsy should return a falsy value", () => {
  expect(functions.isFalsy()).toBeFalsy();
});

//Check to make a value is greater than
test("7 should be greater than 5", () => {
  expect(7).toBeGreaterThan(5);
});

//Greater than or equal to
test("5 should be greater than or equal to 5", () => {
  expect(5).toBeGreaterThanOrEqual(5);
});

//Check for a value to be less than
test("5 should be less than 10", () => {
  expect(5).toBeLessThan(10);
});

//Check for less than or equal to
test("10 should be less than or equal to 10", () => {
  expect(5).toBeLessThanOrEqual(10);
});

//Complex Type
test("newUser should return a new user object with a name property with a value of tayte", () => {
  expect(functions.newUser()).toEqual({
    name: "tayte"
  });
});

//
test("newArray should contain an element of AU", () => {
  expect(functions.newArray()).toContain("AU");
});

describe("testing for my wickedly wild snowcone", () => {
  test("snowcone is an object that has a delicious, sour, and quantity property", () => {
    expect(functions.snowcone).toEqual({
      delicious: true,
      sour: false,
      quantity: 1
    });
  });
  test("snowcone should exist", () => {
    expect(functions.snowcone).not.toBeFalsy();
  });

  test("we only have 1 snowcone", () => {
    expect(functions.snowcone.quantity).not.toBe(2);
  });
});
