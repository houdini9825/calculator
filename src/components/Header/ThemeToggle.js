import styles from './ThemeToggle.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context';
import RadioBtn from './RadioBtn';

function ThemeToggle({ className, handleChange }) {
	const { activeTheme, handleButtonClick, handleLabelClick } = useContext(ThemeContext);

	const themeToggleClasses = classNames(
		styles.container,
		{
			[styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
		},
		className
	);

	const handleLblClick = (e) => {
		handleLabelClick(Number(e.target.textContent))
	}

	return (
		<div className={themeToggleClasses}>
			<div className={styles.labelContainer}>
				<label onClick={handleLblClick} htmlFor="standard">1</label>
				<label onClick={handleLblClick} htmlFor="light">2</label>
				<label onClick={handleLblClick} htmlFor="dark">3</label>
			</div>
			<div className={styles.inputContainer}>
        <RadioBtn onClick={handleButtonClick} className={styles.active} theme={0} onChange={handleChange}/>
				<RadioBtn onClick={handleButtonClick} className={styles.active} theme={1} onChange={handleChange} />
				<RadioBtn onClick={handleButtonClick} className={styles.active} theme={2} onChange={handleChange} />
			</div>
		</div>
	);
}

export default ThemeToggle;
