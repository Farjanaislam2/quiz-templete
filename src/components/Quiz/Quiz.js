import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import swal from 'sweetalert'

const Quiz = ({ questions }) => {
  const { correctAnswer, question, options } = questions;
  console.log(questions);

  const handleRadioBtn = (option) =>{
    if(option === correctAnswer){
      swal("Right Answer!");
    }
    else{
      swal("Wrong Answer!");

    }
  }

  const handleCorrectAnswer = (correctAnswer) => {
    alert(correctAnswer);
  };
  return (
    <div className="bg-pink-100 mt-10 ml-40 mr-40 p-10 rounded-md">
      <div className="mt-5 mb-10 text-xl font-medium flex justify-between">
        {question.slice(3, -4)}

        <EyeIcon
          onClick={() => handleCorrectAnswer(correctAnswer)}
          className="h-8 w-8 text-dark"
        />
      </div>
      <div className="text-lg grid grid-cols-2">
        {options.map((option) => (
          <label className="flex border-2 bg-pink-600 rounded-lg ml-5 mb-5 p-2">
            <input className="" type="radio" name={"...id"} id="" />
            <span onClick={()=> handleRadioBtn(option)} className="grid grid-cols-2 ml-5 justify-center align-middle ">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
