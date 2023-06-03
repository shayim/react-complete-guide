import { useState } from 'react'

export const ExpenseForm = (props) => {
  const [{ date, title, amount }, setExpense] = useState(props)

  const onChange = (value, field) => {
    setExpense((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ date, title, amount })

    setExpense({ date: '', title: '', amount: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          required
          id="date"
          min={'2023-01-01'}
          max={'2023-12-31'}
          value={date}
          onChange={({ target }) => onChange(target.value, 'date')}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required
          id="title"
          value={title}
          onChange={({ target }) => onChange(target.value, 'title')}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
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
      <input type="submit" value={'Add'} />
    </form>
  )
}

ExpenseForm.defaultProps = {
  date: '',
  title: '',
  amount: ''
}
