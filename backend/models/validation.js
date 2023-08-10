import Joi from "joi";

export const TwatValidationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  body: Joi.string().min(3).required(),
});
