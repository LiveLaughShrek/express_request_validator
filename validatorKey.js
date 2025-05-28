//takes as parameters the fields to be sanitized
const validatorKey = (...fields) => {
  try {
    if (typeof fields[0] === "object" && fields.length === 1) {
      const validationField = fields[0]
      const keys = Object.keys(validationField)
      for(let i = 0; i < keys.length; i++){
        if (typeof validationField[keys[i]] !== "object"){
          throw new Error("Wrong parameter type");        
        }
        const temp = Object.keys(validationField[keys[i]])
        const c = temp.filter((a) => {
          return a === "type" || a === "maxLength" || a === "minLength"
        })
        if (c.length !== temp.length){
          throw new Error("Wrong parameter type");        
        }
        c.forEach((z) => {
        
          if(z === "type"){
            if (!(
               validationField[keys[i]][z] !== "email" ||
               validationField[keys[i]][z] !== "password" ||
               validationField[keys[i]][z] !== "username" ||
               validationField[keys[i]][z] !== "other"
            )
            ) {
              throw new Error("Wrong parameter type1");
            }
          } else if (z === "maxLength") {
            if(typeof validationField[keys[i]][z] !== "number")throw new Error("Wrong parameter type");
          } else {
            if(typeof validationField[keys[i]][z] !== "number")throw new Error("Wrong parameter type");
          }
        })
      }


    } else if (typeof fields[0] === "string" && fields.length !== 0) {
      const b =
        fields.filter((a) => {
          return typeof a === "string";
        }).length !== fields.length;
      if (b) {
        throw new Error("Wrong parameter type");
      }
    } else {
      if (fields.length === 0) {
        throw new Error("Missing parameters");
      } else {
        throw new Error("Wrong parameter type");
      }
    }
    return true
  } catch (e) {
    if(e.message){
      console.error(`Error: ${e.message}`);
    } else {
      console.error("Error has occured")
    }
    return false
  }
};

// console.log(validatorKey({
//   "email": {
//     type: "email",
//     maxLength: 30,
//     minLength: 10,
//   }
// }))
module.exports = validatorKey