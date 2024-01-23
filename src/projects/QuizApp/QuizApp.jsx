import React, { useState } from "react";
// import QuizQuestions from "../../utils/QuizQuestions";
import QuizInstructions from "./components/QuizInstructions";
import QuizStarted from "./components/QuizStarted";
const QuizApp = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [continueQuiz, setContinueQuiz] = useState(false);
  // const [quitedQuiz, setQuitedQuiz] = useState(false);
  const startQuiz = () => {
    setQuizStarted((prev) => !prev);
  };
  const onExitClick = () => {
    setQuizStarted(false);
  };
  const onContinueClick = () => {
    setContinueQuiz(true);
  };
  const quitQuiz = () => {
    setQuizStarted(false);
  };
  const restartQuiz = () => {};
  return (
    <div className="flex flex-grow items-center justify-center">
      {!quizStarted && (
        <button
          className="border border-blue-700 bg-blue-600 text-white text-2xl px-4 py-1 rounded-md font-semibold"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      )}
      {quizStarted && !continueQuiz && (
        <QuizInstructions
          onExitClick={onExitClick}
          onContinueClick={onContinueClick}
        />
      )}
      {continueQuiz && (
        <QuizStarted
          quitQuiz={quitQuiz}
          restartQuiz={restartQuiz}
          quizStarted={quizStarted}
        />
      )}
    </div>
  );
};

export default QuizApp;
