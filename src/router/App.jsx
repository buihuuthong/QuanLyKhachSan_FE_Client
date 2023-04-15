import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import RoomList from '../pages/auth/RoomList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/roomlist" element={<RoomList />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;
