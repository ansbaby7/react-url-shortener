import React from "react";

const Shortener = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-gray-200 font-bold text-4xl w-full">
        URL <span>Shortner</span>
      </h1>
      <div className="flex flex-col md:flex-row mx-8 my-8 items-center justify-center gap-3 h-[80vh]">
        <input
          className="w-80 h-16 md:h-12 p-2 border-2 border-gray-400"
          type="text"
          name="text"
          id="text"
          placeholder="Enter a link to shorten"
        />
        <button className="text-white font-bold border border-emerald-50 p-4 w-80 md:w-28 bg-blue-600 uppercase rounded-lg">
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Shortener;
