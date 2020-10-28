import React from 'react'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
    const sucsessCount = Object.keys(props.results).reduce((total, key) => {
    	if (props.results[key] === 'sucsess') {
    		total++
    	}

    	return total
    }, 0)
	return (
        <div className={classes.FinishedQuiz}>
            <ul>
              { props.quiz.map((quizItem,index) => {
                 const cls = [
                   'fa', 
                   props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                   classes[props.results[quizItem.id]]

                 ]

                 return (
                        <li
                          key={index}
                        >
                          <strong>{index+1}</strong>.&nbsp;
                          {quizItem.question}
                          <i className={cls.join(' ')} />

                        </li>
                 	)

              })}
                
            </ul>

            <p>Правильно {sucsessCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to="/">
                  <Button type="sucsess">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
	)
}

export default FinishedQuiz