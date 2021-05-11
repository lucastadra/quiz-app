import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import questions from './questions';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		marginTop: theme.spacing(2),
		display: 'flex',
		justifyContent: 'center'
	  },
	},
  }));


export default function App() {
	const classes = useStyles();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [score, setScore] = useState(0);
	const [blockChange, setBlockChange] = useState(false);
	const [answered, setAnswered] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect && !questions[currentQuestion].answered) {
			setScore(score + 1);

			setIsCorrect(true);
			setBlockChange(true);
			setAnswered(true);

			questions[currentQuestion].answered = true;

			console.log(score);
		}else if (!isCorrect && !questions[currentQuestion].answered) {
			setIsCorrect(false);
			setAnswered(true);
			setBlockChange(true);

			questions[currentQuestion].answered = true;
		}

		// On click, change question /*
		//const nextQuestion = currentQuestion + 1;
		//if (nextQuestion < questions.length) {
		//	setCurrentQuestion(nextQuestion);
		//} else {
		//	setShowScore(true);
		//}
	};

	const handleQuestionChange = (event, value) => {
		console.log(event.target.id);
		if (event.target.id === "next" && currentQuestion < 7 ) {
			setCurrentQuestion(currentQuestion + 1)
			setBlockChange(false)
			setAnswered(false)
		}else{
			setAnswered(true)
			setShowScore(true)
		}
	}

	return (
		<>
			{answered ? (
				<div className={`app_${isCorrect ? 'correct' : 'wrong'}`}>
					{showScore ? (
						<>
							{score === questions.length ? (
								// all correct
								<>
									<div className='score-section'>
										Você acertou todas as questões, parabéns!
									</div>
								</>
								//
							):(
								// Not all correct
								<>
									<div className='score-section'>
										Você acertou {score} de {questions.length} questões
									</div>
								</>
								//
							)}
						</>
					) : (
						<>
							<div className='question-container'>
								{/* <p className='question-correct-title'>{`Questão ${isCorrect ? 'correta!' : 'incorreta!'}`}</p> */}
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
										<button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><p>{answerOption.answerText}</p></button>
									))}
								</div>
							</div>
						</>
					)}
				</div>
			) : (
				<div className='app'>
					{showScore ? (
						<>
							{score === questions.length ? (
								// all correct
								<>
									<div className='score-section'>
										Você acertou todas as questões, parabéns!
									</div>
								</>
								//
							):(
								// Not all correct
								<>
									<div className='score-section'>
										Você acertou {score} de {questions.length} questões
									</div>
								</>
								//
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
										<button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><p>{answerOption.answerText}</p></button>
									))}
								</div>
							</div>
						</>
					)}
				</div>
			)}
			{!showScore ? (			
					<div className='answer-select-section'>
						<button id="next" onClick={handleQuestionChange}>Próxima</button>
					</div> 
				) : ( 
					<div className='answer-select-section'>
						<button id="try_again" onClick={() => window.location.reload()}>Tentar Novamente</button>
					</div> 
			)}

		</>
	);
}
