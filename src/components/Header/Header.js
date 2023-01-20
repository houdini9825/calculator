import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';
import classNames from 'classnames';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context';

function Header({ className }) {
	const { activeTheme } = useContext(ThemeContext);

	const headerClasses = classNames(
		styles.header,
		{
			[styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
		},
		className
	);

	return (
		<div className={headerClasses}>
			<h1>calc</h1>
			<div>
				<p>Theme</p>
				<ThemeToggle />
			</div>
		</div>
	);
}

export default Header;
