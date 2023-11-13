import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../courses/courseSlice';
import getCourseDetailReducer from '../courses/getCourseDetails'
import  getEnrolledCoursesReducer  from '../courses/enrolledCourses';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    courseDetails: getCourseDetailReducer,
    enrolledCourses: getEnrolledCoursesReducer
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;