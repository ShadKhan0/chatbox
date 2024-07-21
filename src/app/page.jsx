"use client";
import React, { useState } from "react";

const chat = () => {
  const [text, setText] = useState([]);
  const [valu, setValu] = useState("");

  const getVal = (e) => {
    setValu(e.target.value);
  };

  const setVal = () => {
    if (valu !== "") {
      setText([...text, valu]);
      setValu("");
      console.log(text);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center" id="body">
      <div className="w-[23%] h-[85%] mx-auto my-auto mt-50 flex flex-col rounded-xl shadow-2xl">
        <div
          className="border-b-[1px] border-yellow-200 p-2 px-5 flex items-center gap-3 bg-gray-800 text-white rounded-t-xl"
          style={{ backgroundColor: "#201e24" }}
        >
          <img
            src="./confuse.jpg"
            alt=""
            width="40px"
            className="rounded-full"
          />
          <p className="font-bold text-sm">Anxiety</p>
        </div>
        <div
          className="flex-grow overflow-y-auto no-scrollbar  p-4"
          id="chatting"
        >
          <p className="text-white bg-gray-700 w-fit p-2 rounded-lg rounded-tl-none mb-4">
          Remember that embarrassing moment?
          </p>
          <p className="text-white bg-gray-700 w-fit p-2 rounded-lg rounded-tl-none ">
            See u at 3 AM!!
          </p>
          {text.map((a, index) => (
            <div key={index} className="flex justify-end ">
              <p className="text-white bg-gray-700 w-fit p-2 rounded-lg rounded-tr-none mb-4 mr-2">
                {a}
              </p>
                 
            </div>
          ))}
        </div>
        <div
          className=" mt-auto p-3 pb-5 rounded-b-xl flex flex-row gap-2"
          style={{ backgroundColor: "#2d2b31" }}
        >
          <input
            type="text"
            value={valu}
            className="flex-grow border-b-2 ml-3 border-gray-600 bg-transparent text-white outline-none"
            placeholder="Enter a Meessage..."
            onChange={getVal}
          />
          <button
            className="rounded-full px-3 p-2 text-sm ml-2 font-bold"
            style={{ backgroundColor: "#fbfb73" }}
            onClick={setVal}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default chat;
