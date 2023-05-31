import express from 'express';
import courseController from '../Controllers/courseController.js';

const router = express.Router();

router.route('/').get(courseController.getAll);
router.route('/').post(courseController.createCourse);
router.route('/:id').delete(courseController.deleteCourse);
router.route('/:id').put(courseController.updateCourse);

export default router;
