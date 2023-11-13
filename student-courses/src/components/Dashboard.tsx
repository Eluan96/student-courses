import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { getEnrolledCourses } from "../redux/courses/enrolledCourses";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { enrolledCourses } = useAppSelector((state) => state.enrolledCourses);
  console.log("enrolledCourses", enrolledCourses);

  useEffect(() => {
    dispatch(getEnrolledCourses());
  }, [dispatch]);

  return (
    <div className="p-5 shadow-xl rounded-xl">
      <h1 className="font-bold mb-5 text-center">Student's Enrolled Courses</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-blue-500 px-4 py-2">Course Name</th>
            <th className="text-blue-500 px-4 py-2">Instructor</th>
            <th className="text-blue-500 px-4 py-2">Thumbnail</th>
            <th className="text-blue-500 px-4 py-2">Due Date</th>
            <th className="text-blue-500 px-4 py-2">Progress Bar</th>
            {/* Add additional table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course) => (
            <tr key={course.id}>
              <td className=" px-4 py-2">{course.name}</td>
              <td className=" px-4 py-2">{course.instructor}</td>
              <td className=" px-4 py-2">{course.thumbnail}</td>
              <td className=" px-4 py-2">{course.dueDate}</td>
              <td className="px-4 py-2">{course.progress}</td>
              {/* Add additional table cells for other enrolled course details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
// import { getEnrolledCourses } from '../redux/courses/enrolledCourses';

// const Dashboard = () => {
//   const dispatch = useAppDispatch();
//   const { enrolledCourses, loading, error } = useAppSelector((state) => state.enrolledCourses);
//   console.log('enrolledCourses', enrolledCourses);

//   useEffect(() => {
//     console.log('Fetching enrolled courses...');
//     dispatch(getEnrolledCourses());
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className='p-5 shadow-xl rounded-xl'>
//       <h2>Dashboard</h2>
//       {/* <h1>Course Name:{enrolledCourses.name}</h1>
//       <h1>Instructor name:{enrolledCourses.instructor}</h1>
//       <h1>Thumbnail:{enrolledCourses.thumbnail}</h1>
//       <h1>Due date:{enrolledCourses.dueDate}</h1>
//       <h1>Progress Bar:{enrolledCourses.progress}</h1> */}

//       {/* {enrolledCourses.map((course) => (
//         <div key={course.id}>
//           <h3>{course.name}</h3> */}
//           {/* Display other enrolled course details */}
//         {/* </div> */}

//     </div>
//   );
// };

// export default Dashboard;
