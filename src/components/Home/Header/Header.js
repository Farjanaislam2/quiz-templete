import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <nav className="flex">
      <div className="bg-blue-300 text-3xl">
        <h2>Quiz Templete</h2>
      </div>

        <div className="header bg-slate-300">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </div>
      
    </nav>
  );
};

export default Header;
