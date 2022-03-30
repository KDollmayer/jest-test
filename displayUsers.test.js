const { displayUsers } = require("./displayUsers")
const  users  = require("./users")

jest.mock("./users")

test('should format users correct', async () => { 
    const mockUsers = [{
        firstName: "Johnny",
        lastName: "Appleseed",
        email: "johnny@apple.com"
    }]
    users.fetchUsers.mockResolvedValue(mockUsers)
    expect(await displayUsers()).toBe("Johnny Appleseed <johnny@apple.com>")
 })
