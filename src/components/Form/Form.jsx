import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.css';

export function Form({ addTodo }) {
	const [inputValue, setInputValue] = useState('');

	// funkcja handleSubmit, która przyjmuje event jako argument i zatrzymuje domyślne zachowanie formularza, a następnie wywołuje funkcję addTodo z wartością inputValue jako argument.
	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo(inputValue);
		setInputValue('');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='text'
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<Button type='submit'>Dodaj</Button>
		</form>
	);
}
