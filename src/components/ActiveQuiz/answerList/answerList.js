import React from 'react'
import classes from './answerList.module.scss'
import answerItem from './answerItem/answerItem'

const answerList = props => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <answerItem
            answer={answer}
          />
        )
      })}
    </ul>
  )
}

export default answerList
