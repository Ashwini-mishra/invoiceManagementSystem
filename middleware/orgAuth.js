require("dotenv").config();
const passport = require('passport');

/************* middleware to authenticate the user **************/
passport.serializeUser(function (user, done) {
    done(null, user);
})
passport.deserializeUser(function (id, done) {
    done(null, '');
});


/************* validate email ************/
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/************* register user validate  ******************/
const orgValidate = ((req, res, next) => {
    try {
        let counter = 0, detail = "", name, email;

        // const mobilePhone = req.body.contact;
        // if (phone(mobilePhone) != "") {
        //     counter++;
        // } else {
        //     mobile = "mobile number is not valid";
        //     detail = ({ mobile });
        // }
        if (req.body.companyName.length >= 3) {
            counter++;

        } else {
            name = "your organization name should be greater then or equal to 3 characters";
            detail = ({ name });
        }
        // if (/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/.test(req.body.password)) {
        //     counter++;
        // } else {
        //     password = "password must contain 8 character,one special character and one upperCase character";
        //     detail = ({ mobile, name, password });
        // }
        let validEmail = validateEmail(req.body.email);
        if (validEmail) {
            counter++;
        } else {
            email = "please enter correct email formate";
            detail = ({ name, email });
        }
        if (detail === "") {
            next();
        } else {
            res.status(400).send(detail);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = {
    orgValidate,
};