import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const {id, name, logo, total } = topic;
  return (
    <div className=" grid lg:grid-cols-4 md: grid-cols-2 sm: grid-cols-1">
      <div className='bg-black m-5 rounded-lg w-50' >
        <div className="">
          <img className="w-full" src={logo}></img>
        </div>
        <div className="ml-4 justify-center align-middle">
          <h2 className="text-2xl mb-5">Name:{name}</h2>

          <p className="text-3xl font-medium bg-lime-300  rounded-lg w-full p-3 mb-5"><Link to={`/topic/${id}`}>Start Practice</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Topic;
