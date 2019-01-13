import React  from 'react'
import classes from './AnswerItem.module.scss'
const answerItem = props => {
  return (
    <li 
      className={classes.answerItem}
      onClick={()=> {props.onAnswerClick(props.answer.id)}}
      >
      {props.answer.text}
    </li>
  )
}

export default answerItem