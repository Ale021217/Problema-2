import { ADD_COURSE, REMOVE_COURSE } from '../actions/CourseActionTypes';

const INITIAL_STATE = {
  availableCourses: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'],
  selectedCourses: [],
};

const CourseReducer = (state = INITIAL_STATE, action) => {
  const { availableCourses, selectedCourses } = state;
  let course, newState;

  switch (action.type) {
    case ADD_COURSE:
      course = action.payload;
      newState = {
        availableCourses: availableCourses.filter((c) => c !== course),
        selectedCourses: [...selectedCourses, course],
      };
      return newState;

    case REMOVE_COURSE:
      course = action.payload;
      newState = {
        availableCourses: [...availableCourses, course],
        selectedCourses: selectedCourses.filter((c) => c !== course),
      };
      return newState;

    default:
      return state;
  }
};

export default CourseReducer;
