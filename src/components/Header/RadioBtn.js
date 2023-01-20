import { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";



function RadioBtn({className, theme, onClick}) {
  const {activeTheme} = useContext(ThemeContext)

	return (
		<label style={Number(theme) !== activeTheme ? {display: 'none'} : {}} htmlFor={theme}>
			<input
				onChange={onClick}
				name="theme"
				id={theme}
				type="radio"
			/>
			<span
				className={activeTheme === theme ? className : ''}
			></span>
		</label>
	);
}

export default RadioBtn
