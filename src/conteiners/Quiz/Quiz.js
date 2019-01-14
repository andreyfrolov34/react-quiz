import React,{Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
  state = {
    answerState: null, // вычисляем правильность ответа
    activeQuestion: 0, // вычисляем index текущего вопроса
    quiz: [
      {
        question: 'какого цвета небо?',
        id:1, // id вопроса
        rightAnswerId: 1, // правильный ответ ответ на вопрос
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
  };
  
  QuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length // вычисляем закончились ли вопросы
  };
  
  onAnswerClickHandler = (answerId) => {
    
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    
    
    const question = this.state.quiz[this.state.activeQuestion];
    
    if (question.rightAnswerId === answerId) {
  
      this.setState({
        answerState: {[answerId]: 'success'}
      });
      
      const timeout = window.setTimeout(() => {
        
        if (this.QuizFinished()) {
          
          console.log('finished')
        
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        
        window.clearTimeout(timeout)
      },500)
  
      
    
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      });
    }
    
    
  };
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
            answerstate={this.state.answerState} // прокидываем значение в answerItem
          />
        </div>
        
      </div>
    )
  }
}

export default Quiz
