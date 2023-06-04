import { useReducer, createContext } from 'react'

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
  },
  {
    id: 4,
    date: new Date(2023, 6, 4),
    title: "MacBook pro 16' M2 Pro Max ",
    amount: 1699.99
  }
]

const selectedYear = new Date().getFullYear()
const filterYearRange = 4

const initialState = { expenses, selectedYear, filterYearRange }

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    case 'SELECTED_YEAR':
      return {
        ...state,
        expenses: [...state.expenses],
        selectedYear: action.payload
      }
    default:
      return state
  }
}

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
