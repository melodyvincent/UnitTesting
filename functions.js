module.exports = {
  add: (num1, num2) => {
    return num2 + num2;
  },
  isNull: () => null,
  isUndefined: () => undefined,
  isTruthy: () => true,
  isFalsy: () => false,
  newUser: () => Object.assign({}, { name: "tayte" }),
  newArray: () => ["AU", "AG", "H20"],
  snowcone: {
    delicious: true,
    sour: false,
    quantity: 1
  }
};
