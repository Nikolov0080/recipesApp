const { decodeToken } = require("../../utils/jwt")
const UserSchema = require('../../models/user/userSchema');

async function getUser(id) {
    // finding the user in database
    return await UserSchema.findById({ _id: id })
}

module.exports.profileGet = (req, res) => {

    const user = (req.headers.cookie_client || req.headers.cookie)

    if (!user) {
        return res.status(500).send("Error");
    }
    // getting the user ID
    const userId = decodeToken(user.replace('auth=', ""))._id

    getUser(userId).then(a => {
        a.password = undefined;
        console.log(a)
        res.send('profile')
    })

}

module.exports.profilePost = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send(req.body)
}