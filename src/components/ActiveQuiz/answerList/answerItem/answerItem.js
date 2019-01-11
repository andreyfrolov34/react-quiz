import React  from 'react'
import classes from './answerItem.module.scss'
const answerItem = props => {
  return (
    <li className={classes.answerItem}>
      {props.answer.text}
    </li>
  )
}

export default answerItem
