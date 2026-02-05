import express from 'express';
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { authenticate } from '../middleware/auth.js';
import { authorize } from '../middleware/roleAuth.js';
import { validateProject, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

router.use(authenticate);

router.post('/', validateProject, handleValidationErrors, createProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.put('/:id', validateProject, handleValidationErrors, updateProject);
router.delete('/:id', deleteProject);

export default router;
