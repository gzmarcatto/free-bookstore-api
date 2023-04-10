
import { createUserSchema } from './userSchema.js';

function validateCreateUser(req, res, next) {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
}

export { validateCreateUser };

