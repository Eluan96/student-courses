// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Course } from "../../redux/courses/courseSlice"; // Assuming you have a type definition for your course object
import CourseItem from "../../components/CourseItem";
// import SearchBar from "../../components/SearchBar";

const CourseListing: React.FC = () => {


  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-3">Course Listing</h1>
      <CourseItem />
    </div>
  );
};

export default CourseListing;
