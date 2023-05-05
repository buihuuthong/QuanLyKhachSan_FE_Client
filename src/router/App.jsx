import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import RoomList from "../pages/room/RoomList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Phòng */}
        <Route path="/room/*">
          <Route path="list" element={<RoomList />} />
          {/* <Route path="type" element={<RoomType />} />
          <Route path="state" element={<RoomState />} /> */}  
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
