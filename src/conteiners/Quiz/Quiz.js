import React,{Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
  
  
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'какого цвета небо?',
        id:1,
        rightAnswerId: 1,
        answers: [
          {text: 'голубой', id: 1},
          {text: 'зеленый', id: 2},
          {text: 'красный', id: 3},
          {text: 'черный', id: 4}
        ]
      },
      {
        question: 'какого цвета трава?',
        id:1,
        rightAnswerId: 2,
        answers: [
          {text: 'голубой', id: 1},
          {text: 'зеленый', id: 2},
          {text: 'красный', id: 3},
          {text: 'черный', id: 4}
        ]
      }
    ]
  }
  onAnswerClickHandler = (answerId) => {
    console.log('answerID: ', answerId)
    this.setState({activeQuestion: this.state.activeQuestion + 1})
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на вопросы</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            questionLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
        
      </div>
    )
  }
}

export default Quiz
