const functions = require("./functions");

//run 4 times
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//run one time
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

//run before test suite
const nameCheck = () => console.log("checking name...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("user is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("user is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

const initDatabase = () => console.log("Database initialized...");
const closeDatabase = () => console.log("Database closed...");

test("Adds 2+2  to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2  to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull matches only null
//toBeUndefined matches only undifined
//toBeTruthy
//toBeFalsy

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toBe does not work on object,replaced bt beEqual
test("user should be xi li Object", () => {
  expect(functions.createUser()).toEqual({ firstName: "Xi", lastName: "Li" });
});

//toBeLessThan
//toBeLessThanOrEqual
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//regex
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays
test("Admin should be in username", () => {
  userNames = ["john", "karen", "admin"];
  expect(userNames).toContain("admin");
});

//Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//async/await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
