import React,{Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
  
  
  state = {
    quiz: [
      {
        answers: [
          {text: 'вопрос 1'},
          {text: 'вопрос 2'},
          {text: 'вопрос 3'},
          {text: 'вопрос 4'}
        ]
      }
    ]
  }
  
  render() {
    return (
      <div className={classes.Quiz}>
        
        
        
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz quiz={this.state.quiz[0].answers} />
        </div>
        
      </div>
    )
  }
}

export default Quiz
