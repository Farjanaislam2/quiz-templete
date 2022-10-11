import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({questions}) => {
    const {correctAnswer,question, options} = questions;
  const handleRadioBtn = (option) =>{
    if(option === correctAnswer){
        console.log('right')
    }
    else{
        <div className='toast alert alert-info'>
            <span>Wrong Answer</span>
        </div>
    
    }
  }
    return (
        <div className='bg-pink-100 mt-10 ml-40 mr-40 p-10 rounded-md'>
            
    <div className='mt-5 mb-10 text-xl flex justify-between'>
    
    {
        question.slice(3, -4)
    }
    
    <EyeIcon className="h-8 w-8 text-dark"/>
    </div>
            <div className='text-lg grid grid-cols-2'>
         {
            options.map(option => <label  className='flex'>
            <input className='' type="radio" name={'...id'} id="" />
            <span onClick={() =>handleRadioBtn(option)} className='grid grid-cols-2 ml-5 justify-center align-middle'>{option}</span>
          </label>)
          
         }
           
            </div>
        </div>
    );
};

export default Quiz;