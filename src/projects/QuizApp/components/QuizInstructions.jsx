import React from "react";

const QuizInstructions = ({ onExitClick, onContinueClick }) => {
  const instructions = [
    {
      sr: 1,
      text: " You will have only 15 seconds per each question.",
    },
    {
      sr: 2,
      text: " Once you select your answer, it can't be undone.",
    },
    {
      sr: 3,
      text: " You can't select any option once time goes off.",
    },
    {
      sr: 4,
      text: " You can't exit from the Quiz while you're playing.",
    },
    {
      sr: 5,
      text: "You'll get points on the basis of your correct answers.",
    },
  ];

  return (
    <div className="bg-slate-500 text-white rounded-lg shadow-2xl ">
      <p className="text-xl font-semibold text-blue-500 bg-slate-700 p-5 ">
        Here are Some Rules to keep in mind before Starting Quiz!
      </p>
      <div className="p-5">
        <ol>
          {instructions.map((item, i) => (
            <li
              className="flex items-center my-3 text-lg font-semibold"
              key={i}
            >
              <span className="mr-5">{item.sr}.</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mb-2 flex  justify-end w-full">
        <button
          onClick={onExitClick}
          className="border border-red-700 hover:bg-red-700 bg-red-600 mr-4 text-white text-lg px-4 py-1 rounded-md font-semibold"
        >
          Exit Quiz
        </button>
        <button
          onClick={onContinueClick}
          className="border border-green-700 hover:bg-green-700 bg-green-600 mr-2 text-white text-lg px-4 py-1 rounded-md font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizInstructions;
