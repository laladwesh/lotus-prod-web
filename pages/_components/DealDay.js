import React from "react";

const DealDay = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-center mb-8 heading">
        Deal of the day
      </h1>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div className="w-full md:w-1/2 h-96 bg-gray-800 p-8">
          <h1 className="text-white text-3xl md:text-5xl leading-tight font-bold mb-8 heading">
            Only Valid for Today
          </h1>
          <button
            onClick={() => console.log("haifaebi")}
            className="px-4 cursor-pointer py-2 font-semibold text-black bg-gray-200 rounded hover:bg-gray-300"
          >
            Place Enquiry
          </button>
        </div>

        <div className="w-full md:w-1/2 h-96 bg-gray-800 p-8">
          <h1 className="text-white text-3xl md:text-5xl leading-tight font-bold mb-8 heading">
            Only Valid for Today
          </h1>
          <button
            onClick={() => console.log("haifaebi")}
            className="px-4 cursor-pointer py-2 font-semibold text-black bg-gray-200 rounded hover:bg-gray-300"
          >
            Place Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealDay;
