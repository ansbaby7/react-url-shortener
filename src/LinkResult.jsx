import React, {useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({inputText}) => {
    console.log(inputText);
  const [shortLink, setShortLink] = useState("Hello");
  const [copied,setCopied] = useState(false);

  useEffect(()=>{
      const timer = setTimeout(()=> {
          setCopied(false)
      },2000);

      return ()=> clearTimeout(timer)
  },[copied])

  return (
    <div className="flex justify-between items-center py-2 px-4">
      <p className="text-white bg-slate-800 w-48 rounded-l-[3px] py-2 px-4 ">
        {shortLink}
      </p>
      <CopyToClipboard text={shortLink} onCopy={() => setCopied(true)}>
        <button className={ "rounded-r-[3px] py-2 px-2 bg-cyan-600" + (copied?" bg-white":"")}>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={ "h-6 w-6 text-white" + (copied?" text-cyan-600":"")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
