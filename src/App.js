import { useContext, useReducer } from 'react';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';
import ThemeContext from './contexts/theme-context';
import Output from './components/Output/Output';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import classNames from 'classnames';
import Calculate from './helpers/calculate';


const reducer = (state, action) => {
	switch (action.type) {
    case 'EXECUTE':
      const data = [...state.data]
      if (state.currNum) data.push(Number(state.currNum))
      if (data.length && typeof data.at(-1) === 'string') {
        return {
          ...state
        }
      }
      return {
        ...state,
        data: Calculate.executeCalcs(data),
        currNum: ''
      }
    case 'DELETE_LAST':
      if (!state.currNum) {
        const newCurr = state.data.at(-1)
        return {
          ...state,
          data: state.data.slice(0, -1),
          currNum: newCurr ? String(newCurr).slice(0, -1) : ''
        }
      }
      return {
        ...state,
        currNum: state.currNum.slice(0, -1)
      }
    case 'DELETE_ALL':
      return {
        ...state,
        currNum: '',
        data: []
      }
    case 'ADD_ONE_NUM':
      if (action.payload === '.' && state.currNum.includes('.') || state.currNum.length > 12 || typeof state.data.at(-1) === 'number') return {...state}

      if (!state.currNum && action.payload === '.') {
        return {
          ...state,
          currNum: '0.'
        }
      }
      return {
        ...state,
        currNum: state.currNum + action.payload
      }
    case 'ADD_OPERATION':
      if (action.payload.match(/[x+/]/) && !state.data.length && !state.currNum || String(state.data.at(-1)).match(/[-x+/]/) && !state.currNum || state.currNum === '.') return {...state}


      const newData = [...state.data]

      if (state.currNum) newData.push(Number(state.currNum))
      newData.push(action.payload)

      return {
        ...state,
        currNum: '',
        data: newData
      }
    default:
      return {...state}
  }
};

function App() {
	const [state, dispatch] = useReducer(reducer, {
    data: [],
    currNum: '',
    error: false
  });

  const handleExecute = () => {
    dispatch({type: 'EXECUTE'})
  }

  const handleDeleteLastChar = () => {
    dispatch({type: 'DELETE_LAST'})
  }

  const handleDeleteAll = () => {
    dispatch({type: 'DELETE_ALL'})
  }

  const handleAddNumOrPeriod = (e) => {
    dispatch({type: 'ADD_ONE_NUM', payload: e.target.textContent})
  }

  const handleAddOperation = (e) => {
    dispatch({type: 'ADD_OPERATION', payload: e.target.textContent})
  }

	const { activeTheme } = useContext(ThemeContext);

	const backgroundClasses = classNames(styles.background, {
		[styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
	});
	return (
		<div className={backgroundClasses}>
			<div>
				<Header />
				<Output data={state.data} currNum={state.currNum} className={styles.output} />
				<ButtonsContainer onExecute={handleExecute} onDeleteAll={handleDeleteAll} onDeleteLast={handleDeleteLastChar} onAddNumOrPer={handleAddNumOrPeriod} onAddOperation={handleAddOperation} className={styles.btnsContainer}/>
			</div>
		</div>
	);
}

export default App;
