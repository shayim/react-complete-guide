import { AppContext } from '../../AppContext'
import './ExpenseForm.css'

import { useContext, useState } from 'react'

export const ExpenseForm = (props) => {
  const {
    state: { filterYearRange }
  } = useContext(AppContext)
  const [{ date, title, amount }, setExpense] = useState(props)

  const onChange = (value, field) => {
    setExpense((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmitExpense({ date, title, amount })

    setExpense({ date: '', title: '', amount: '' })
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="expense-form__control">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          required
          id="date"
          min={`${new Date().getFullYear() - filterYearRange + 1}-01-01`}
          max={`${new Date().getFullYear()}-12-31`}
          value={date}
          onChange={({ target }) => onChange(target.value, 'date')}
        />
      </div>
      <div className="expense-form__control">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          required
          id="title"
          value={title}
          onChange={({ target }) => onChange(target.value, 'title')}
        />
      </div>
      <div className="expense-form__control">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          required
          step={0.01}
          min={0.01}
          id="amount"
          value={amount}
          onChange={({ target }) => onChange(target.value, 'amount')}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={props.onAbort}>Cancel</button>
        <input type="submit" value={'Add'} />
      </div>
    </form>
  )
}

ExpenseForm.defaultProps = {
  date: '',
  title: '',
  amount: ''
}
