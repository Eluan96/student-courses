import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../store';
import axios from '../../api/httpService'
// import { useParams } from 'react-router-dom';

// Define the type for a course
export interface Course {
  id: string;
  name: string;
  instructor: string;
duration: string;
thumbnail: string;
dueDate: string;
progress: number
completed: boolean 
error: string
}

interface InitialDetails {
    enrolledCourses: Course[]
    loading: boolean
    error: string
}
// Initial state
const initialState: InitialDetails = {
   enrolledCourses: [],
   loading: false,
    error: ''
};


export const getEnrolledCourses = createAsyncThunk('courses/getEnrolledCourses', async (_, thunkAPI) => {
    try {
        
        const response = await axios.get(`/enrolledCourses`)
        console.log('response', response)
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


const getEnrolledCoursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder.addCase(getEnrolledCourses.pending, (state) => {
          state.error = ''
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      builder.addCase(getEnrolledCourses.fulfilled, (state, action: any) => {
          state.enrolledCourses = action.payload.data
          state.error = ''
      })
      builder.addCase(getEnrolledCourses.rejected, (state, action) => {
          state.error = action.payload as string
      })
    }
  });

  export default getEnrolledCoursesSlice.reducer;