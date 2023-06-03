import { ExpenseList } from './components/Expenses/ExpenseList'

export const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(2023, 2, 28),
      title: 'Car Insurance',
      amount: 294.67
    },
    {
      id: 2,
      date: new Date(2023, 2, 31),
      title: 'Lunch',
      amount: 4.99
    },
    {
      id: 3,
      date: new Date(2023, 3, 18),
      title: 'IPhone 14 pro',
      amount: 699.99
    }
  ]

  return (
    <div className="app">
      <ExpenseList expenses={expenses} />
    </div>
  )
}
