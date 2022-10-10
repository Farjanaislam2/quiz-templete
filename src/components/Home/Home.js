import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topic = useLoaderData();
  const topics = topic.data;
//   console.log(topics)
  
  return (
    <div>
      <div className="text-4xl font-semibold bg-red-100 p-8 m-10 rounded-md">
        <h1> Test your knowledge with programming language quiz questions.</h1>
      </div>

      <div>
    {
        topics.map(topic=> <Topic
            key={topic.id} 
            topic={topic}
        ></Topic>)
    }
      </div>
    </div>
  );
};

export default Home;
