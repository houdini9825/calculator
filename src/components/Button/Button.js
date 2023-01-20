import styles from './Button.module.scss'
import classNames from 'classnames'
import { useContext } from 'react'
import ThemeContext from '../../contexts/theme-context'

// types number, operand, remove, equals, period


function Button({
  type,
  onClick,
  children,
  className
}) {
  const {activeTheme} = useContext(ThemeContext)

  const btnClasses = classNames((styles.btn), {
    [styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
    [styles.numOpPer]: ['number', 'period', 'operand'].includes(type),
    [styles.equals]: type === 'equals',
    [styles.remove]: type === 'remove'
  }, className)
  
  return <button className={btnClasses} onClick={onClick}>{children}</button>
}

export default Button