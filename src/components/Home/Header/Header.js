import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <nav className="flex justify-between bg-slate-400">
      <div className=" text-3xl p-3 ml-4">
        <h2 className="text-3xl font-bold">Quiz Templete</h2>
      </div>

        <div className="header text-xl font-medium p-3 mr-4">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </div>
      
    </nav>



  );
};

export default Header;
