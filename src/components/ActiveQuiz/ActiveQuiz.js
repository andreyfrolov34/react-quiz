import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
           {props.question}
        </span>
        <small>{props.answerNumber} of {props.questionLength}</small>
      </p>
      
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        answerstate ={props.answerstate}
      />
    
    </div>
  )
};

export default ActiveQuiz
