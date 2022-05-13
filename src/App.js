import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudents from './components/students/pages/AddStudents';
import Student from './components/students/Student';
import NavBarStudents from './components/students/pages/NavBarStudents'



function App() {
  return (
    <div className='app'>
      <NavBarStudents />
      <Routes>
        <Route path='/' element={<Student />} />
        <Route path='/addstudent' element={<AddStudents />} />
      </Routes>
    </div>
  );
}

export default App;
