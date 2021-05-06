import React, { useState } from 'react';

import questions from './questions';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<>
					{score === questions.length ? (
						<>
							<div className='score-section'>
								Você acertou todas as questões, parabéns!
							</div>
						</>
					):(
						<>
							<div className='score-section'>
								Você acertou {score} de {questions.length} questões
							</div>
						</>
					)}
				</>
			) : (
				<>
					<div className='question-container'>
						<div className='question-section'>
							<div className='question-count'>
								<span>Questão {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>
								{questions[currentQuestion].questionText} 
							
								{questions[currentQuestion].questionImgUrl !== '' ? (
									<img src={questions[currentQuestion].questionImgUrl} alt="" className="question-image"></img>
								) : (<div></div>)}
							</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
