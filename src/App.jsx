import { useContext } from 'react'
import { ExpenseList } from './components/Expenses/ExpenseList'
import { AppContext } from './AppContext'

export const App = () => {
  const {
    state: { expenses, selectedYear }
  } = useContext(AppContext)

  return (
    <div className="app">
      <ExpenseList
        expenses={expenses
          .filter((e) => e.date.getFullYear() === selectedYear)
          .sort((a, b) => (a.date > b.date ? -1 : 1))}
      />
    </div>
  )
}
