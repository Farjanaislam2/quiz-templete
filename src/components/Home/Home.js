import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const topic = useLoaderData();
  const topics = topic.data;
  //   console.log(topics)

  return (
    <div>
      <div className="text-4xl font-semibold bg-red-100 p-8 m-20 rounded-md">
        <div className="flex mr-10">
          <BookOpenIcon className="h-36 w-36 text-pink-500 align-middle justify-center" />
          <h1 className="justify-center align-middle mt-10 ml-5">
            {" "}
            Test your knowledge with programming language quiz questions.
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-1">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
