import React, { useState } from 'react';
import "./Quiz.css";

function Quiz({ questions }) {
    const [answer, setAnswer] = useState()

    const handleAnswer = (e) => {
        setAnswer(e)
    }
    console.log(answer)
    return (
        <div>
            {
                questions.map((question) => (
                    <div className='question-card' key={question.id}>
                        <div className='question'>
                            {question.question}
                        </div>
                        <div className='answers-card'>
                            <div className='answers'>
                                <input onClick={() => handleAnswer("a")} type='radio' name={`question_${question.id}`} />
                                <div className='answer'>{question.a}</div>
                            </div>
                            <div className='answers'>
                                <input onClick={() => handleAnswer("b")} type='radio' name={`question_${question.id}`} />
                                <div className='answer'>{question.b}</div>
                            </div>
                            <div className='answers'>
                                <input onClick={() => handleAnswer("c")} type='radio' name={`question_${question.id}`} />
                                <div className='answer'>{question.c}</div>
                            </div>
                            <div className='answers'>
                                <input onClick={() => handleAnswer("d")} type='radio' name={`question_${question.id}`} />
                                <div className='answer'>{question.d}</div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Quiz;
