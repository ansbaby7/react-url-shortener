import React, { useState } from "react";

const Shortener = ({setInputText}) => {
  const [value,setValue] = useState("");
  const handleClick = () => {
    setInputText(value);
    setValue("");
  }
    return (
    <div className="min-h-[10vh] text-center">

      <h1 className="text-5xl md:text-6xl py-6 text-gray-200">
        URL <span className="uppercase">Shortner</span>
      </h1>

      <div className="flex mb-8">
        <input
          className="py-2 pr-[0.2rem] outline-none indent-4 text-base bg-gray-200 w-full rounded-l-[3px] "
          type="text"
          name="text"
          id="text"
          placeholder="Enter a link to shorten"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={handleClick} className="px-4 bg-cyan-600 text-white font-bold uppercase h-12 rounded-r-[3px]">
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Shortener;
