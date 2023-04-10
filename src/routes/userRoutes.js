import { Router } from 'express';
import { create, getById, update, remove } from '../controllers/userController.js';
import { validateSchema } from '../middlewares/schemaMiddleware.js';
import { userSchema } from '../schemas/userSchema.js';
const router = Router();

router.post('/', validateSchema(userSchema), create);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;