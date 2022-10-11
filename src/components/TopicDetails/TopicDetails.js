import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const questions =useLoaderData()
    const questionss =questions.data.questions
    //console.log
    //(questions)
    return (
        <div>
            <p className='text-3xl font-medium'>Quiz of {questions.data.name}</p>
            
            {
                questionss.map(questions => <Quiz
                key={questions.id}
                Name={questions.name}
                questions={questions}
                
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;