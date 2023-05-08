import React  from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blogs from './Pages/Blogs';

import NewPost from './Components/Posts';

import Form from './Components/Form';

import NaviBar from './Components/NaviBar';

import Login from './Pages/Login';

import Register from './Pages/Registration';

function App() {

  return (

    <BrowserRouter>

      <NaviBar />

      <Routes>

        <Route 
        path="/" 
        element={<h1>Home Page</h1>} />

        <Route 
        path="/blogs" 
        element={< Blogs /> } />

        <Route 
        path="/blogs/:id" 
        element={<NewPost /> } />

        <Route 
        path="/create-one" 
        element={<Form />} />

        <Route 
        path="/login" 
        element={<Login />} />

        <Route 
        path="/register" 
        element={<Register />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;