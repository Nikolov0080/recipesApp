module.exports.profileGet = (req, res) => {
    // TODO  headers auth here too 
    console.log(req.headers)
    res.send('profile')
}

module.exports.profilePost = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send(req.body)
}