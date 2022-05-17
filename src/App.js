import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStudents from './components/students/pages/AddStudents';
import Student from './components/students/Student';
import NavBarStudents from './components/students/pages/NavBarStudents'
import DentailStudents from './components/students/pages/DentailStudents';
import './App.css';



function App() {
  return (
    <div className='app'>
      <NavBarStudents />
      <Routes>
        <Route path='/' element={<Student />} />
        <Route path='/addstudent' element={<AddStudents />} />
        <Route path='/student/:id' element={<DentailStudents />} />
      </Routes>
    </div>
  );
}

export default App;
