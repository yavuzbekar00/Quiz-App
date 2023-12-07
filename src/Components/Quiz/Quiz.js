import React, { useState, useEffect } from 'react';
import "./Quiz.css";

function Quiz({ questions, activeQuestion, setActiveQuestion }) {
    const [answer, setAnswer] = useState();
    const [handleAnswer, setHandleAnswer] = useState();
    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0)

    useEffect(() => {
        setAnswer(undefined);
        if (handleAnswer) {
            setScore(score + 1)
        }
        setHandleAnswer(undefined)
    }, [activeQuestion]);

    const checkAnswer = (e) => {
        setClick(false);
        setAnswer(e);
    };

    const handleClick = () => {
        setClick(true);
        if (answer === questions[activeQuestion].correct) {
            setHandleAnswer(true);
        } else {
            setHandleAnswer(false);
        }

    };

    return (
        <div>
            <div className='score'>{`Skor : ${score}`}</div>
            <div className='transition'>
                <button onClick={() => setActiveQuestion(activeQuestion - 1)} disabled={activeQuestion === 0} className='previous'>Önceki Soru</button>
                <button onClick={() => setActiveQuestion(activeQuestion + 1)} disabled={questions.length === (activeQuestion + 1)} className='next'>Sonraki Soru</button>
            </div>
            <div className='question-card' >
                <div className='question'>
                    {questions[activeQuestion].question}
                </div>
                <div className='answers-card'>
                    <div className='answers'>
                        <input onClick={() => checkAnswer("a")} type='radio' name={`question_${questions[activeQuestion].id}`} checked={answer === "a"} />
                        <div className='answer'>{questions[activeQuestion].a}</div>
                    </div>
                    <div className='answers'>
                        <input onClick={() => checkAnswer("b")} type='radio' name={`question_${questions[activeQuestion].id}`} checked={answer === "b"} />
                        <div className='answer'>{questions[activeQuestion].b}</div>
                    </div>
                    <div className='answers'>
                        <input onClick={() => checkAnswer("c")} type='radio' name={`question_${questions[activeQuestion].id}`} checked={answer === "c"} />
                        <div className='answer'>{questions[activeQuestion].c}</div>
                    </div>
                    <div className='answers'>
                        <input onClick={() => checkAnswer("d")} type='radio' name={`question_${questions[activeQuestion].id}`} checked={answer === "d"} />
                        <div className='answer'>{questions[activeQuestion].d}</div>
                    </div>
                </div>
                <div className='answer-button'>
                    <button onClick={handleClick}>Cevabı Gönder</button>
                </div>
                {
                    answer !== undefined &&
                    (
                        click &&
                        <div className='answer-area'>
                            {
                                handleAnswer ? (
                                    <div>Cevap Doğru</div>
                                ) : (
                                    <div>Cevap Yanlış </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Quiz;
