const router = require("express").Router();
const organization = require('../controllers/organizationController');
const user = require('../middleware/auth');
const passport = require('../middleware/orgAuth');
require("dotenv").config();
const multer = require('multer');
const upload = multer({dest:'uploads/'});

/************* CRUD operation organization **********/
router.post("/register",user.authenticate, passport.orgValidate, organization.orgRegister);
router.get("/detail", user.authenticate, organization.getTheOrg);
router.get("/allDetail", organization.getAllTheOrg);
router.put('/updateProfile', user.authenticate, organization.updateOrgProfile);
router.delete('/delete', user.authenticate, organization.deleteAccount);

/************* data wise filter and upload image *************/
// router.post("/upload",passport.authenticate,upload.single('logo'),organization.uploadImage);
// router.get("/filterDate",organization.filterWiseDate);

module.exports = router;