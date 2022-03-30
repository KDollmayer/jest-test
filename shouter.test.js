const { shout } = require("./shouter")

test("should upcase a sting", () => {
    expect(shout("hello, world!")).toBe("HELLO, WORLD!!")
})
