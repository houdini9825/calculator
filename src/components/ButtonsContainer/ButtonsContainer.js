import styles from './ButtonsContainer.module.scss';
import Button from '../Button/Button';
import classNames from 'classnames';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context';

function ButtonsContainer({className, onDeleteAll, onDeleteLast, onAddNumOrPer, onAddOperation, onExecute}) {
  const {activeTheme} = useContext(ThemeContext)

  const containerClasses = classNames((styles.container), {
    [styles.standard]: activeTheme === 0,
		[styles.light]: activeTheme === 1,
		[styles.dark]: activeTheme === 2,
  }, className)


	return (
		<div className={containerClasses}>
			<Button onClick={onAddNumOrPer} type={'number'}>7</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>8</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>9</Button>
			<Button onClick={onDeleteLast} type={'remove'}>Del</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>4</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>5</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>6</Button>
			<Button onClick={onAddOperation} type={'operand'}>+</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>1</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>2</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>3</Button>
			<Button onClick={onAddOperation} type={'operand'}>-</Button>
			<Button onClick={onAddNumOrPer} type={'period'}>.</Button>
			<Button onClick={onAddNumOrPer} type={'number'}>0</Button>
			<Button onClick={onAddOperation} type={'operand'}>/</Button>
			<Button onClick={onAddOperation} type={'operand'}>x</Button>
			<Button onClick={onDeleteAll} className={styles.spanTwo} type={'remove'}>Reset</Button>
			<Button onClick={onExecute} className={styles.spanTwo} type={'equals'}>=</Button>
		</div>
	);
}

export default ButtonsContainer;
