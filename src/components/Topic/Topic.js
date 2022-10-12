import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const {id, name, logo, total } = topic;
  return (
    <div className="grid sm:grid-cols-1">
      <div className='bg-black rounded-lg w-60 ' >
        <div className="">
          <img className="w-full" src={logo}></img>
        </div>
        <div className=" justify-center align-middle">
          <h2 className="text-2xl text-white mb-5">Name:{name}</h2>

          <p className="text-3xl font-medium bg-lime-300  rounded-lg w-full p-3 mb-5"><Link to={`/topic/${id}`}>Start Practice</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Topic;
