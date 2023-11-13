import React, { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { getCourses } from "../redux/courses/courseSlice";


const SearchBar= () => {

  const dispatch = useAppDispatch();
  const { courseList } = useAppSelector((state) => state.courses);
  console.log(courseList);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFilteredData] = useState(courseList);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filterData = (searchTerm: any) => {
    const filteredData = courseList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      item.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };



  return (
    <div className="mb-4 ">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="p-2 shadow-xl rounded-xl mr-5 "
      />
      <button
        onClick={filterData}
        className="p-2 bg-blue-500 text-white rounded-xl mr-5"
      >
        Search
      </button>
      <Link to='/dashboard'><button className="p-2 bg-blue-500 text-white rounded-xl">
        Student Dashboard
      </button>
      </Link>
    </div>
  );
};

export default SearchBar;
