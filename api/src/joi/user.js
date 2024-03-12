const Joi = require('joi');

const userJoiSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().email(),
  avatar: Joi.string().default('https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'),
  banner: Joi.string().default('https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'),
  password: Joi.string().optional(), // Assuming you might not always provide the password during updates
  last_login_at: Joi.date().default(Date.now()),
  created_at: Joi.date().default(Date.now()),
  costPerDay: Joi.number().default(100),
  sellPerDay: Joi.number().default(200),
  days_worked: Joi.number().default(23),
  description: Joi.string(),
  job_title: Joi.string(),
  organisation: Joi.string().trim().required(),
  status: Joi.string().default('active'),
  availability: Joi.string().default('available'),
  address: Joi.string(),
});

module.exports = userJoiSchema;
