import { useContext } from 'react'
import './ExpenseFilter.css'
import { AppContext } from '../../AppContext'

export const ExpenseFilter = ({ expenses }) => {
  const {
    state: { filterYearRange: yearRange, selectedYear },
    dispatch
  } = useContext(AppContext)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const filteredYear = (i) => new Date().getFullYear() - yearRange + i + 1

  const totalExpensePerYear = (y) =>
    expenses
      .filter((e) => e.date.getFullYear() === +y)
      .reduce((s, e) => s + e.amount, 0)

  const totalExpensePerMonth = (m) =>
    expenses
      .filter(
        (e) => e.date.getFullYear() === +selectedYear && e.date.getMonth() === m
      )
      .reduce((s, e) => s + e.amount, 0)

  const colorBarHeight = (m) => {
    return totalExpensePerMonth(m) === 0
      ? '0'
      : `${
          (totalExpensePerMonth(m) / totalExpensePerYear(selectedYear)) * 100
        }%`
  }

  return (
    <div className="expense-filter">
      <header className="expense-filter__header">
        <h2>Filter by Year</h2>
        <select
          name="filteredYear"
          value={selectedYear}
          onChange={({ target }) =>
            dispatch({ type: 'SELECTED_YEAR', payload: +target.value })
          }
        >
          {new Array(yearRange).fill().map((_, i) => (
            <option key={filteredYear(i)} value={filteredYear(i)}>
              {filteredYear(i)}
            </option>
          ))}
        </select>
      </header>
      <div className="expense-filter__body">
        {months.map((m, i) => (
          <div className="expense-filter__month" key={m}>
            <div className="expense-filter__color-bar">
              <div style={{ height: colorBarHeight(i) }}></div>
            </div>
            <div>{m}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
