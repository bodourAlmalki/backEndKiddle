import mongoose from 'mongoose';

const coursesSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },

   courseName:{
    type: String,
    required:true,
   },
   courseDescription:{
    type :String,
    required:true,
   }
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model('courseModel', coursesSchema);
export default courseModel;
