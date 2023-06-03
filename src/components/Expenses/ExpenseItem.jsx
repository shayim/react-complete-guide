import { useState } from 'react'
import './ExpenseItem.css'
import { Card } from '../UI/Card'

import './ExpenseDate'
import { ExpenseDate } from './ExpenseDate'

export const ExpenseItem = (props) => {
  const [{ date, title, amount }, setExpense] = useState(props)
  const [isEditing, setIsEditing] = useState(false)

  const changeTitle = () => {
    setIsEditing(!isEditing)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <header className="expense-item__description">
        {isEditing ? (
          <input
            value={title}
            onChange={({ target }) =>
              setExpense((state) => ({ ...state, title: target.value }))
            }
          />
        ) : (
          <h2>{title}</h2>
        )}
      </header>
      <div className="expense-item__price">${amount}</div>
      <button onClick={changeTitle}>{isEditing ? 'OK' : 'Change Title'}</button>
    </Card>
  )
}
