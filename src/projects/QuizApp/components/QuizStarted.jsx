import React, { useState } from "react";
import QuizQuestions from "../../../utils/QuizQuestions";
const QuizStarted = ({ quitQuiz, restartQuiz, quizStarted }) => {
  const [page, setPage] = useState(1);
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState(null);
  const [optionsClicked, setOptionsClicked] = useState(false);
  const [score, setScore] = useState(0);
  const questionPerClick = 1;

  const indexOfLastQuestion = page * questionPerClick;
  const indexOfFirstQuestion = indexOfLastQuestion - questionPerClick;
  const questionsToDisplay = QuizQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  //   console.log(QuizQuestions);
  const nextQuestion = () => {
    setResult(null);
    setPage((prev) => prev <= 4 && prev + 1);
  };
  const handleSubmit = () => {
    setResult(null);
    setSubmit(true);
  };
  const check = (answer, answerIndex, questionIndex) => {
    setOptionsClicked(false);
    setResult(false);
    const question = questionsToDisplay[questionIndex];
    const correctAnswer = question.answer;

    if (answer === correctAnswer) {
      setResult(true);
      setOptionsClicked(true);
      setScore((prev) => prev + 1);
    } else {
      setResult(false);
      setOptionsClicked(true);
    }
  };
  //   console.log(result);
  //   console.log(score);
  return (
    <>
      {page <= 5 && !submit && (
        <div className="bg-slate-600 rounded-md w-[40%]  shadow-xl">
          <div className="flex justify-between p-4">
            <p className="text-2xl font-bold ">Coder's Quiz Application</p>
            <p className="border shadow-sm border-red-700 bg-red-600 text-sm font-semibold rounded-md px-2 py-1 ">
              {" "}
              Your's Time Left{" "}
            </p>
          </div>
          <div className="p-4">
            {questionsToDisplay.map((question, i) => (
              <div key={`${i}}`}>
                <div className="flex my-4  items-center text-lg font-semibold ">
                  <span className="mr-5">{question.numb} .</span>
                  <p>{question.question}</p>
                </div>

                <div>
                  {question.options.map((item, index) => (
                    <p
                      onClick={() => check(item, index, i)}
                      className={`my-3 border ${
                        optionsClicked === true &&
                        result !== null &&
                        "pointer-events-none"
                      } hover:bg-slate-700/40 border-slate-500 text-md font-medium cursor-pointer rounded-md px-2 py-2 `}
                      key={`${i}-${index}`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="  border-t border-slate-500 px-0">
            <div className="p-4 flex justify-between">
              <p className="text-md font-semibold ">
                {" "}
                {page} of {QuizQuestions.length} Questions{" "}
              </p>
              {page < 5 && (
                <button
                  onClick={nextQuestion}
                  className="border border-blue-700  hover:bg-blue-700 bg-blue-600 text-md font-semibold rounded-md px-2 py-1"
                >
                  Move on Next Question
                </button>
              )}
              {page === 5 && (
                <button
                  onClick={handleSubmit}
                  className="border border-green-700  hover:bg-green-700 bg-green-600 text-md font-semibold rounded-md px-2 py-1"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {submit && (
        <div className="bg-slate-600 shadow-xl rounded-md p-5 text-center">
          <i className="fas fa-crown text-blue-500 text-5xl mb-2"></i>
          <p className="text-2xl font-semibold">You have Completed the Quiz</p>
          <p
            className={`${
              score > 3
                ? "text-green-500 "
                : score === 3
                ? "text-blue-500"
                : "text-red-600/80"
            } font-semibold text-2xl`}
          >
            Your have scored {score} out of {QuizQuestions.length}
          </p>
          <span
            className={`${
              score > 3
                ? "text-green-500 "
                : score === 3
                ? "text-blue-500"
                : "text-red-600/80"
            } font-semibold text-2xl`}
          >
            {score > 3
              ? "Congratulations"
              : score === 3
              ? "Not Bad"
              : "Need Improvement"}{" "}
            !
          </span>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={restartQuiz}
              className="text-sm shadow-lg px-3 py-1 bg-green-600 border border-green-700 rounded-md hover:bg-green-700 font-semibold"
            >
              Restart Quiz
            </button>
            <button
              onClick={quitQuiz}
              className="text-sm shadow-lg px-3 py-1 bg-red-600 border border-red-700 rounded-md hover:bg-red-700 font-semibold"
            >
              Quit Quiz
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizStarted;
