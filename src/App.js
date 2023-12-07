import { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Hangisi web ön yüz gelştirici araçlarından değildir?",
      a: "React",
      b: "Html",
      c: "Javascript",
      d: "MSQL",
      correct: "d"
    },
    {
      id: 1,
      question: "Hangisi javascript geliştirme kütüphanesi değildir?",
      a: "Vue",
      b: "PHP",
      c: "React",
      d: "Anguler",
      correct: "b"
    },
    {
      id: 3,
      question: "Hangi etiket bir başlık belirtir?",
      a: "<p>",
      b: "<div>",
      c: "<h1>",
      d: "<span>",
      correct: "c"
    },
    {
      id: 4,
      question: "JavaScript'te bir değişkeni tanımlamak için kullanılan keyword nedir?",
      a: "var",
      b: "let",
      c: "const",
      d: "variable",
      correct: "c"
    },
    {
      id: 5,
      question: "CSS'te bir öğenin kenar yarıçapını ayarlamak için kullanılan özellik hangisidir?",
      a: "border-style",
      b: "border-radius",
      c: "margin",
      d: "padding",
      correct: "b"
    },
    {
      id: 6,
      question: "Hangi HTTP metodu veri göndermek için kullanılır?",
      a: "GET",
      b: "POST",
      c: "DELETE",
      d: "PUT",
      correct: "b"
    },
    {
      id: 7,
      question: "JavaScript'te bir döngüyü sonlandırmak için kullanılan ifade nedir?",
      a: "break",
      b: "stop",
      c: "exit",
      d: "return",
      correct: "a"
    },
    {
      id: 8,
      question: "Hangi dil bir tarayıcı tarafından doğrudan yorumlanan bir dildir?",
      a: "Java",
      b: "C#",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      id: 9,
      question: "Hangi HTML etiketi bir resim eklemek için kullanılır?",
      a: "<img>",
      b: "<picture>",
      c: "<figure>",
      d: "<image>",
      correct: "a"
    },
    {
      id: 10,
      question: "React'ta bir bileşenin state'ini güncellemek için kullanılan fonksiyon hangisidir?",
      a: "updateState",
      b: "changeState",
      c: "setState",
      d: "modifyState",
      correct: "c"
    },
  ])
  return (
    <div className='app'>
      <Quiz activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} questions={questions}></Quiz>
    </div>
  );
}

export default App;
