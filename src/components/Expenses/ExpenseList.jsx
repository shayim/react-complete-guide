import { ExpenseItem } from './ExpenseItem'
import { NewExpenseForm } from './/NewExpense'

import { Card } from '../UI/Card'

export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <Card>
        <NewExpenseForm />
      </Card>
      <Card>
        {expenses.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </Card>
    </>
  )
}
