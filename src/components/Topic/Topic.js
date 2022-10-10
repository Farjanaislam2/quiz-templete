import React from 'react';

const Topic = ({topic}) => {
    
    const {name,logo,total} =topic;
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
          <div className='flex'>
          <div className=''>
           <img className='w-43' src={logo}></img>
           </div>
           <div>
           <h2>Name:{name}</h2>
           <p>total: {total}</p>
           </div>
          </div>
        </div>
    );
};

export default Topic;