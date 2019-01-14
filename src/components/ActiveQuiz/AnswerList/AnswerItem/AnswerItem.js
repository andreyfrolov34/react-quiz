import React  from 'react'
import classes from './AnswerItem.module.scss'
const answerItem = props => {
  console.log('answerstate',props.answerstate)
  const cln = [classes.answerItem];
  
  if (props.answerstate) {
    cln.push(classes[props.answerstate])
  }
  
  return (
    <li
      className={cln.join(' ')}
      onClick={() => {props.onAnswerClick(props.answer.id)}}
      answerstate ={props.answerstate}
      >
      {props.answer.text}
    </li>
  )
}

export default answerItem
