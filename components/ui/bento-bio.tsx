import React from "react";

type Props = {};

const Bio = (props: Props) => {
  return (
    <>
      <div className=" text-indigo-800 dark:text-indigo-100 pl-4 pt-2 text-2xl font-semibold">
        Bio
      </div>
      <div className="text-lg text-start px-4 pt-3 font-semibold text-gray-700 dark:text-gray-300">
        I am an AIML student at PES Modern College of Engg, Pune, with a keen
        interest in AI and web development.
      </div>
    </>
  );
};

export default Bio;
