import './Card.css'

export const Card = ({ children, className }) => {
  return (
    <div className={`card${className ? ' ' + className : ''}`}>{children}</div>
  )
}
