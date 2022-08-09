import './App.css';
import React  from 'react';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/NavBar';
import ViewQuestion from './pages/ViewQuestion';
import QuestionForm from './pages/QuestionForm'

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question/:id" element={<ViewQuestion />} />
        <Route path="/question/ask" element={<QuestionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
