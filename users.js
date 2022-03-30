const axios = require("axios")

const fetchUsers = async () =>  {
    const result = await axios.get("https://randomuser.me/api/?results=10")
    return result.data.result.map(({name, email}) => {
        return {firstname: name.first, lastname: name.last, email}
    })
}

module.exports = { fetchUsers }