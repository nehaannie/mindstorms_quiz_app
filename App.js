import React, { useState } from 'react';
import QuestionCard from './components/questioncard';
import Score from './components/scores';
import Result from './components/results';
import Home from './components/homepage'; // Import Home component
import questions from './data/questions'; // Import your questions
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="app">
      {!showQuiz ? (
        <Home startQuiz={startQuiz} /> // Render Home component
      ) : showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <div>
          <QuestionCard
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
          <Score score={score} />
        </div>
      )}
    </div>
  );
};

export default App;
