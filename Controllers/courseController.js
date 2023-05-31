import course from '../Models/courseModel.js';

const getAll = async (req, res) => {
  const allcourses = await course.find();
  res.json({
    message: 'All course',
    status: 200,
    data: allcourses,
  });
};

const createCourse = async (req, res) => {
  const { courseName, courseDescription } = req.body;
  const courses = new course({ courseName , courseDescription });

  try {
    const savedCourse = await courses.save();
    res.json({
      message: 'course created successfully',
      status: 201,
      data: savedCourse,
    });
  } catch (error) {
    res.json({
      message: 'course created failed',
      status: 203,
    });
  }
};

const updateCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    if (!req.body.courseName) {
      throw new Error('course updated failed');
    }
    const updatedCourse = await course.findByIdAndUpdate(courseId, req.body);
    res.json({
      message: 'course updated successfully',
      status: 200,
      data: updatedCourse,
    });
  } catch (error) {
    res.json({
      message: 'course updated failed',
      status: 203,
    });
  }
};

const deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  const deletedCourse = await course.findByIdAndDelete(courseId);
  res.json({
    message: 'course deleted successfully',
    status: 200,
    data: deletedCourse,
  });
};

export default { getAll, createCourse, updateCourse, deleteCourse };
