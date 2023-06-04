import { ExpenseItem } from './ExpenseItem'
import { NewExpenseForm } from './/NewExpense'
import { ExpenseFilter } from './ExpenseFilter'

import { Card } from '../UI/Card'

export const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <Card>
        <NewExpenseForm />
      </Card>
      <Card>
        <ExpenseFilter expenses={expenses} />
      </Card>
      <Card>
        {expenses.length > 0 ? (
          expenses.map((item) => <ExpenseItem key={item.id} {...item} />)
        ) : (
          <div style={{ textAlign: 'center' }}>Not Expense Records</div>
        )}
      </Card>
    </div>
  )
}
