import React from "react";
import Header from "./Header";

const Main = ({ children, title}) => {
  return (
    <div className="px-10">
      <Header title={title} />
      {children}
    </div>
  );
};

export default Main;
