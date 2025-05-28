const { Router } = require("express")
const { query, validationResult } = require("express-validator")
const bodyParser = require("body-parser");
const validatorKey = require("./validatorKey.js")
const middleware = Router();

middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded())


const validator = (req, res, next) => {
  
  next()
}

module.exports = middleware