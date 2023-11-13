import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListing from './screens/courseListing/CourseListing';
import StudentDashboard from './screens/studentDashboard/StudentDashboard';
import CourseDetails from './components/CourseDetails';
// import CourseDetails from './components/CourseDetails';

const App = () => {
  return (
    <>
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<CourseListing />} /> 
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path='/courses/:id' element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;