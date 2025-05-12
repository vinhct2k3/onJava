import React, { useState, useEffect } from "react";
import { quizSet1 } from "./quizSet1";
import { quizSet2 } from "./quizSet2";
import { quizSet3 } from "./quizSet3";
import { quizSet4 } from "./quizSet4";
import "./App.css";

function App() {
  const [selectedSet, setSelectedSet] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Hàm để xáo trộn mảng (thuật toán Fisher-Yates)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    // Giới hạn số câu hỏi là 50
    return newArray.slice(0, 50);
  };

  const handleCheckAnswer = () => {
    if (selected === null) {
      alert("Vui lòng chọn một đáp án!");
      return;
    }
    setShowAnswer(true);
    if (selected === shuffledQuestions[current].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current + 1 < shuffledQuestions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
      setShowAnswer(false);
    }
  };

  const handleSetSelect = (setName) => {
    let questions;
    switch(setName) {
      case "Đề 1":
        questions = shuffleArray(quizSet1);
        break;
      case "Đề 2":
        questions = shuffleArray(quizSet2);
        break;
      case "Đề 3":
        questions = shuffleArray(quizSet3);
        break;
      case "Đề 4":
        questions = shuffleArray(quizSet4);
        break;
      default:
        questions = [];
        break;
    }
    setShuffledQuestions(questions);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setShowResult(false);
  };

  if (!shuffledQuestions.length) {
    return (
      <div className="quiz-selection">
        <h1>Chọn bộ đề ôn tập Java</h1>
        <div className="set-buttons">
          {["Đề 1", "Đề 2", "Đề 3", "Đề 4"].map((setName) => (
            <button
              key={setName}
              onClick={() => handleSetSelect(setName)}
              className="set-button"
            >
              {setName}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="question-number">Câu {current + 1}/{shuffledQuestions.length}</h2>
      <h3 className="question-text">{shuffledQuestions[current].question}</h3>
      <ul className="options-list">
        {shuffledQuestions[current].options.map((option, index) => (
          <li key={index} className={`option-item ${selected === index ? 'active' : ''}`}>
            <label className="option-label">
              <input
                type="radio"
                name="option"
                value={index}
                disabled={showAnswer}
                checked={selected === index}
                onChange={() => setSelected(index)}
                className="option-radio"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      <div className="buttons-container">
        {current > 0 && !showAnswer && (
          <button onClick={handlePrevious} className="navigation-button">
            Quay lại
          </button>
        )}
        
        {!showAnswer ? (
          <button onClick={handleCheckAnswer} className="navigation-button">
            Xem đáp án
          </button>
        ) : (
          <div className="answer-feedback">
            {selected === shuffledQuestions[current].answer ? (
              <p className="correct-answer">✅ Chính xác!</p>
            ) : (
              <p className="wrong-answer">
                ❌ Sai! Đáp án đúng là:{" "}
                <strong>{shuffledQuestions[current].options[shuffledQuestions[current].answer]}</strong>
              </p>
            )}
            
            {/* Hiển thị phần giải thích nếu có */}
            {shuffledQuestions[current].explanation && (
              <div className="explanation-box">
                <p className="explanation-title">Giải thích:</p>
                <p className="explanation-text">{shuffledQuestions[current].explanation}</p>
              </div>
            )}
            
            <div className="buttons-container">
              {current > 0 && (
                <button onClick={handlePrevious} className="navigation-button">
                  Quay lại
                </button>
              )}
              <button onClick={handleNext} className="navigation-button">
                {current + 1 < shuffledQuestions.length ? "Câu tiếp theo" : "Xem kết quả"}
              </button>
            </div>
          </div>
        )}
      </div>

      {showResult && (
        <div className="result-container">
          <h2 className="result-title">🎉 Bạn đã hoàn thành đề!</h2>
          <p className="result-score">Số câu đúng: {score}/{shuffledQuestions.length}</p>
          <p className="result-score">Điểm: {((score / shuffledQuestions.length) * 10).toFixed(1)} / 10</p>
          <button onClick={() => setShuffledQuestions([])} className="restart-button">
            Chọn đề khác
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
