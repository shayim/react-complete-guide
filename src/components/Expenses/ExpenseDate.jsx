const locale = 'zh-CN'

export const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString(locale, { month: 'long' })
  const day = date.toLocaleString(locale, { day: '2-digit' })
  const year = date.getFullYear()
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}
