import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from '../../api/httpService'

// Define the type for a course
export interface Course {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
duration: string;
schedule: string;
location: string
prerequisites: []
syllabus: string;
likes: number
thumbnail: string;
dueDate: string;
progress: number
completed: boolean 
}

// Define the type for the courses state
interface CoursesState {
  courseList: Course[];
  enrolledCourses: Course[];
  loading: boolean
  error: string
}

// Initial state
const initialState: CoursesState = {
  courseList: [],
  enrolledCourses: [],
  loading: false,
  error: ''
};

export const getCourses = createAsyncThunk('courses/getAllCourses', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/courses')
        console.log(response)
        return response

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        if (error.request) {
            return thunkAPI.rejectWithValue("Network Error");
        }
        if (error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
}) 



// Create a slice
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state) => {
        state.error = ''
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    builder.addCase(getCourses.fulfilled, (state, action: any) => {
        state.courseList = action.payload.data
        state.error = ''
    })
    builder.addCase(getCourses.rejected, (state, action) => {
        state.error = action.payload as string
    })
  }
});


// Selectors
export const selectCourseList = (state: RootState) => state.courses.courseList;
export const selectEnrolledCourses = (state: RootState) => state.courses.enrolledCourses;

// Export actions and reducer
// export const { setCourseList, enrollCourse,  } = courseSlice.actions;

export default courseSlice.reducer;