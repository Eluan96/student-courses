import React, { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { getCourses } from "../redux/courses/courseSlice";
import { Link } from "react-router-dom";
// import { Course } from '../redux/courses/courseSlice'; // Assuming you have a type definition for your course object
// import { enrollCourse } from '../redux/courses/courseSlice';

const CourseItem = () => {
  const dispatch = useAppDispatch();
  const { courseList } = useAppSelector((state) => state.courses);
  console.log(courseList);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCourse = (course:any)=>{
    localStorage.setItem('id', course.id)
      }

  const handleEnroll = () => {};

  return (
    <>
    <div>
    <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 shadow-xl rounded-xl mr-5 "
      />
      <button
        
        className="p-2 bg-blue-500 text-white rounded-xl mr-5"
      >
        Search
      </button>
      <Link to='/dashboard'><button className="p-2 bg-blue-500 text-white rounded-xl">
        Student Dashboard
      </button>
      </Link>
    </div>
    <div className="shadow-xl rounded-xl p-4 mb-4">
      {courseList?.filter((item) => {return searchTerm.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(searchTerm) || 
      searchTerm.toLocaleLowerCase() === '' ? item : item.instructor.toLocaleLowerCase().includes(searchTerm)} ).map((item) => (
        <div className="mb-5">
          <h2 className="text-blue-500 text-2xl">{item.name}</h2>
          <p>Instructor: {item.instructor}</p>
          <div className="flex gap-5">
            <button
              onClick={handleEnroll}
              className="shadow-xl border-2 w-[6%] rounded-lg"
            >
              Enroll
            </button>
            <Link to="/courses/:id">
              <button className="shadow-xl border-2 w-[120%] rounded-lg" onClick={() => handleCourse(item)}>
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CourseItem;
