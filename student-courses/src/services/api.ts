import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

interface Course {
  id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: string;
  likes: number;
  thumbnail: string;
  dueDate: string;
  progress: number;
  completed: boolean;
}

// export const getCourses = async (): Promise<Course[]> => {
//   try {
//     const response = await axios.get<Course[]>(`${BASE_URL}/courses`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     throw error;
//   }
// };

export const updateLikes = async (courseId: string, likes: number): Promise<Course> => {
  try {
    const response = await axios.patch<Course>(`${BASE_URL}/courses/${courseId}`, { likes });
    return response.data;
  } catch (error) {
    console.error('Error updating likes:', error);
    throw error;
  }
};