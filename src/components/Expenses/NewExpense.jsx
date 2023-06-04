import { useContext, useState } from 'react'

import { ExpenseForm } from './ExpenseForm'
import { AppContext } from '../../AppContext'

export const NewExpenseForm = () => {
  const [isFormShow, setIsFormShow] = useState(false)
  const { dispatch } = useContext(AppContext)

  const saveNewExpense = ({ title, date, amount }) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        title,
        date: new Date(date),
        amount: +amount,
        id: Math.random().toString()
      }
    })
    setIsFormShow(false)
  }

  return isFormShow ? (
    <ExpenseForm
      onSubmitExpense={saveNewExpense}
      onAbort={() => setIsFormShow(false)}
    />
  ) : (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => setIsFormShow(true)}>Add New Expense</button>
    </div>
  )
}
