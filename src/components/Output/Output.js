import { useContext } from 'react'
import ThemeContext from '../../contexts/theme-context'
import styles from './Output.module.scss'
import classNames from 'classnames'

function Output({className, data, currNum}) {
  const {activeTheme} = useContext(ThemeContext)

  const outputClasses = classNames((styles.output), {
    [styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
  }, className)


  let info = `${data.join(' ')} ${currNum}`

  return <div className={outputClasses}>{currNum || data.length ? info : 0}</div>
}

export default Output