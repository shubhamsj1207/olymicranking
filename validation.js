const Joi = require('joi'); 

export function customervalidate(data) {
const customerAddschema = Joi.object().keys({ 
    lastname: Joi.string().alphanum().min(3).max(30).required(),
    mobileno: Joi.number().integer().min(10).max(10), 
}); 
const result =  customerAddschema.validate(data); 
return result;
}






