import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../store';
import axios from '../../api/httpService'
import { useParams } from 'react-router-dom';

// Define the type for a course
export interface Course {
  id?: string;
  name?: string;
  instructor?: string;
  description?: string;
  enrollmentStatus?: string;
duration?: string;
schedule?: string;
location?: string
prerequisites?: string[]
syllabus?: string;
likes?: number
thumbnail?: string;
dueDate?: string;
progress?: number
completed?: boolean 
error?: string
}

interface InitialDetails {
    courseDetails: Course
    error: string
}
// Initial state
const initialState: InitialDetails = {
   courseDetails: {},
    error: ''
};


export const getCourseDetails = createAsyncThunk('courses/getCourseDetails', async (_, thunkAPI) => {
    try {
        const { id } = useParams()
        const response = await axios.get('/courses/' + id)
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


const getCourseDetailsSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder.addCase(getCourseDetails.pending, (state) => {
          state.error = ''
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      builder.addCase(getCourseDetails.fulfilled, (state, action: any) => {
          state.courseDetails = action.payload.data
          state.error = ''
      })
      builder.addCase(getCourseDetails.rejected, (state, action) => {
          state.error = action.payload as string
      })
    }
  });

  export default getCourseDetailsSlice.reducer;