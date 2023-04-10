import { create as createUser } from '../services/userService.js';

async function create(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    return res.status(201).json(user);
  } catch (err) {
    return next(err);
  }
}

export { create };

