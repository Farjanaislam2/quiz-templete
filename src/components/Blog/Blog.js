import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <p className='text-4xl font-bold'>Question & Answer</p>
    <div className='bg-green-200 mt-10 p-20 ml-40 mr-40 rounded-lg'>
        <div className='border-2 bg-green-500 rounded-lg p-5'>
            <p className='text-2xl font-semibold'>1.What is the props of react router?</p>
            <p className='text-lg'>Ans: React Props are like function arguments in JavaScript and attributes in HTML.</p>
        </div>
        <div className='border-2 bg-green-500 rounded-lg p-5 mt-5'>
            <p className='text-2xl font-semibold'>2. How does Context API works?</p>
            <p className='text-lg'>Ans:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        <div className='border-2 bg-green-500 rounded-lg p-5 mt-5'> 
            <p className='text-2xl font-semibold'>3.Write something about useRef() </p>
            <p className='text-lg'>Ans:
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.</p>
        </div>
    </div>
        </div>
    );
};

export default Blog;