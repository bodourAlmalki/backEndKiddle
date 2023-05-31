import Quiz from '../Models/quizModel.js';
import validationResult from 'express-validator';
import courseModel from '../Models/courseModel.js';
import user from '../Models/userModel.js';

// Controller action for creating a new quiz
const createQuiz = async (req, res) => {
  try {
    const { user_id, title, question, answer, course } = req.body;
    console.log(user_id, title, question, answer, course);

    if (!user_id || !title || !question || !answer || !course) {
      return res.status(404).json('please enter all fields');
    }
    const quiz = await new Quiz({
      user_id,
      title,
      question,
      answer,
      course,
    });
    await quiz.save();
    return res.status(201).json(quiz);
  } catch (error) {
    console.log(error);
    res.status(400).json('failed to create a quiz');
  }
};

// Controller action for retrieving all quizzes
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve quizzes.' });
  }
};

// Controller action for retrieving a specific quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found.' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve quiz.' });
  }
};

// Controller action for updating a quiz
const updateQuiz = async (req, res) => {
  const id = req.params.id;
  const { user_id, title, question, answer, course } = req.body;
  console.log(id, user_id, title, question, answer, course);

  try {
    // Validate request body

    const editedquiz = ({
      user_id,
      title,
      question,
      answer,
      course,
    });
    // res.status(200).json(quiz);
    const updatedQuiz = await Quiz.findByIdAndUpdate(id ,{ user_id,
      title,
      question,
      answer,
      course,} ,{new:true});
    res.json({
    message: "Quiz updated successfully",
    status: 200,
    data: updatedQuiz,
    });
  } catch (error) {
    // res.status(500).json({ error: 'Failed to update quiz.' });
    console.log(error)
    res.json({
    message: "Product updated failed",
    status: 203,
    });
  }
};

// Controller action for deleting a quiz
const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndRemove(req.params.id);
    res.json({
      message: "Quiz deleted successfully",
      status: 200,
      data: quiz,
      });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found.' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete quiz.' });
  }
};

export default {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};
