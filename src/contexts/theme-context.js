import { createContext, useState } from 'react';

const ThemeContext = createContext();


function ThemeContextProvider({ children }) {
	const [activeTheme, setActiveTheme] = useState(0);

	const handleButtonClick = () => {
		setActiveTheme((prevState) => {
			return prevState + 1 >= 3 ? 0 : prevState + 1;
		})
	}

	const handleLabelClick = (val) => {
		setActiveTheme(val-1)
	}

	const context = { activeTheme, handleButtonClick, handleLabelClick };

	return (
		<ThemeContext.Provider value={context}>
			{children}
		</ThemeContext.Provider>
	);
}

export {ThemeContextProvider}
export default ThemeContext
