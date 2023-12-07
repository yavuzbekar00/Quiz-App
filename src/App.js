import { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Hangisi web ön yüz gelştirici araçlarından değildir?",
      a: "React",
      b: "Html",
      c: "Javascript",
      d: "MSQL",
      correct: "d"
    }
  ])
  return (
    <div className='app'>
      <Quiz questions={questions}></Quiz>
    </div>
  );
}

export default App;
