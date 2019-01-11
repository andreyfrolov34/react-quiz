import React from 'react'
import classes from './ActiveQuiz.module.scss'
import answerList from './answerList/answerList'

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>2.</strong>&nbsp;
           как дела?
        </span>
        <small>2 of 14</small>
      </p>
      
      <answerList
        answers={props.answers}
      />
    
    </div>
  )
};

export default ActiveQuiz
