const userSchema = require('../../models/user/userSchema');
const { saveProfilePicture } = require('../../utils/cloudinary/saveProfilePicture');
const jwt = require('../../utils/jwt');
const { upload } = require('../../utils/multerConf');
const { registerValidator } = require('../../validations/user');

module.exports.registerGet = (req, res) => {
    res.render('register');
}

module.exports.registerPost = (req, res) => {

    upload.single('profilePicture')(req, res, async (err) => {
console.log(req.body)
console.log(req.file)
        const isValid = registerValidator(req.body);

        if (isValid) {
            return res.send(isValid);
        }

        const {
            username,
            email,
            password,
            skillLevel
        } = req.body;

        if (err) {
            console.log(err);
            return res.send({ err })
        } else {
            const profilePic = req.file;

            if (!profilePic) {
                return res.status(201).send("Profile pic is required");
            } else {
                saveProfilePicture(profilePic.filename).then((resp) => {
                    return resp;

                }).then((profilePictureURL) => {

                    async function saveUser() {
                        return await userSchema.create({ username, email, password, skillLevel, profilePictureURL }).catch((err) => {
                            console.log(err.code);
                            console.log("something went wrong with registration...");
                            // TODO  continue with the err catching <3
                        })
                    }

                    saveUser().then(async (response) => {

                        if (response) {

                            const token = jwt.createToken({ ...response._doc, secret: process.env.JWT_SECRET });
                            res.cookie("auth", token, { expires: new Date(Date.now() + 9999999), httpOnly: false })
                            res.header('auth', token);

                        } else {
                            console.log("SOMETHING WENT WRONG");
                        }
                    }).then(() => {
                        res.send('registered!');
                    }).catch(e => {

                        console.log(e)
                        return res.send(e._message)
                    })

                })
            }
        }
    })
}