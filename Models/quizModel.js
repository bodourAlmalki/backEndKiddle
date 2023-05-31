import mongoose from 'mongoose';

// Quiz schema
const quizSchema = new mongoose.Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,

  },
  title: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,

  },
//   tutorial: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Tutorial',
//     required: true,
//   },
});

// Quiz model
const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
