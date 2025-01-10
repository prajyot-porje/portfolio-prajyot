import React from "react";

type Props = {};

const Bio = (props: Props) => {
  return (
    <div className="">
      <div className=" bg-gradient-to-r to-[#34cfeb] from-[#e108f9] text-center bg-clip-text text-transparent  pt-2 text-2xl font-semibold">
        Bio
      </div>
      <div className="text-lg text-start px-4 pt-3 font-semibold text-gray-700 dark:text-gray-300">
        I am an AIML student at PES Modern College of Engg, Pune, with a keen
        interest in AI and web development.
      </div>
    </div>
  );
};

export default Bio;
