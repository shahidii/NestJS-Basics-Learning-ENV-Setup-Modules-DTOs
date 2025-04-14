import * as Joi from "joi";


export const envValidationSchema = Joi.object({
    PORT : Joi.number().default(3001),
    NODE_ENV : Joi.string().valid('development', 'production', 'test').default('development')
})