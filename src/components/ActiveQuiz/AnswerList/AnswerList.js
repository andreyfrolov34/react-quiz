import React from 'react'
import classes from './answerList.module.scss'
import Answeritem from './AnswerItem/AnswerItem'

const answerList = props => (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <Answeritem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            answerstate ={props.answerstate ? props.answerstate[answer.id] : null}
          />
        )
      })}
    </ul>
  )


export default answerList
