const {fetchUsers} = require("./users")
const displayUsers = async () => {
    const users = await fetchUsers()
    return users.map(({firstName, lastName, email}) => `${firstName} ${lastName} <${email}>`).join("\n")
}

module.exports = { displayUsers }