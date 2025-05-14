//main function that returns middleware
//takes as parameters the fields to be sanitized
const { Router } = require("express");
const validatorKey = (...fields) => {
  try {
    if (typeof fields[0] === "object" && fields.length === 1) {
      console.log("is object");




    } else if (typeof fields[0] === "string" && fields.length !== 0) {
      const b =
        fields.filter((a) => {
          return typeof a === "string";
        }).length !== fields.length;
      if (b) {
        throw new Error("Wrong parameter type");
      }
      console.log("is string");
    } else {
      if (fields.length === 0) {
        throw new Error("Missing parameters");
      } else {
        throw new Error("Wrong parameter type");
      }
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
    //to not throw error
    const emptyRouter = Router();
    return emptyRouter;
  }
};

module.exports = validatorKey