import React, { useEffect, useState } from "react";
// import { getCourseDetails } from "../redux/courses/getCourseDetails";
// import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
// import { useParams } from "react-router-dom";
import axios from "../api/httpService";
// import { useAppSelector } from '../redux/store/hooks';

interface Course {
  id?: string;
  name?: string;
  instructor?: string;
  description?: string;
  enrollmentStatus?: string;
  duration?: string;
  schedule?: string;
  location?: string;
  prerequisites?: string[];
  syllabus?: string;
  error?: string;
}

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState<Course>({});
  const  id  = localStorage.getItem("id");
  console.log('id', id)

  const fetchCourseDetails = async () => {
    try {
      const { data } = await axios.get(`/courses/${id}`);
      console.log("data", data);
      return setCourseDetails(data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.data.message);
      }
      if (error.request) {
        console.error("Network Error");
      }
      if (error.message) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  // console.log('courseDetails', courseDetails)

  return (
    <div className="mb-3 shadow-xl rounded-xl p-10">
      <h1 className="mb-4 text-2xl font-bold">Course Details</h1>
      <h2>Instructors Name: {courseDetails.name}</h2>
      <h2>Description: {courseDetails.description}</h2>
      <h2>Enrollment Status: {courseDetails.enrollmentStatus}</h2>
      <h2>Course Duration: {courseDetails.duration}</h2>
      <h2>Schedule: {courseDetails.schedule}</h2>
      <h2>Location: {courseDetails.location}</h2>
      <h2>Pre-requisites: {courseDetails.prerequisites}</h2>
      <h2>Syllabus: {courseDetails.syllabus}</h2>

      <button className="shadow-xl border-2 w-[10%] rounded-lg mt-3">
        Enroll
      </button>
      {/* Display other course details */}
    </div>
  );
};

export default CourseDetails;

// import React, { useState, useEffect } from "react";
// import axios from "../api/httpService";
// import { useParams } from "react-router-dom";

// interface Course {
//   id?: string;
//   name?: string;
//   instructor?: string;
//   description?: string;
//   enrollmentStatus?: string;
//   duration?: string;
//   schedule?: string;
//   location?: string;
//   prerequisites?: string[];
//   syllabus?: string;
//   likes?: number;
//   thumbnail?: string;
//   dueDate?: string;
//   progress?: number;
//   completed?: boolean;
//   error?: string;
// }

// const CourseDetails: React.FC = () => {
//   const [courseDetails, setCourseDetails] = useState<Course>({});
//   const { id } = useParams();

//   const getCourseDetails = async () => {
//     try {
//       const { data } = await axios.get(`/courses/${id}`);
//       console.log(data);
//       setCourseDetails(data);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       if (error.response) {
//         console.log(error.response.data.message);
//       } else if (error.request) {
//         console.log("Network Error");
//       } else {
//         console.log(error.message);
//       }
//     }
//   };

//   useEffect(() => {
//     getCourseDetails(); // Call the function
//   }, [id]); // Add id as a dependency to re-run the effect when id changes

//   const handleEnroll = () => {};

//   return (
//     <div className="shadow-xl rounded-xl p-5 mb-4">
//       <h1 className="mb-3 font-bold">Course Details</h1>
//       <h2>Instructor's Name: {courseDetails.name}</h2>
//       <h2>Description: {courseDetails.description}</h2>
//       <h2>Enrollment Status: {courseDetails.enrollmentStatus}</h2>
//       <h2>Course Duration: {courseDetails.duration}</h2>
//       <h2>Schedule: {courseDetails.schedule}</h2>
//       <h2>Location: {courseDetails.location}</h2>
//       <h2>Pre-requisites: {courseDetails.prerequisites?.join(", ")}</h2>
//       <h2>Syllabus: {courseDetails.syllabus}</h2>
//       {/* Display other course details */}
//       <button
//         onClick={handleEnroll}
//         className="shadow-xl border-2 w-[6%] rounded-lg mt-3"
//       >
//         Enroll
//       </button>
//     </div>
//   );
// };

// export default CourseDetails;
