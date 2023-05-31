

import express from 'express';
import quizController from '../Controllers/quizController.js';

const router = express.Router();


// Route for creating a new quiz
router.post('/', quizController.createQuiz);

// Route for retrieving all quizzes
router.get('/', quizController.getAllQuizzes);

// Route for retrieving a specific quiz by ID
router.get('/:id', quizController.getQuizById);

// Route for updating a quiz
router.put('/:id', quizController.updateQuiz);

// Route for deleting a quiz
router.delete('/:id', quizController.deleteQuiz);


export default router;
