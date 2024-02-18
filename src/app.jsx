import styles from './app.module.css';
import { useState, useReducer } from 'react';
import { Form } from './components/Form/Form';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { getSubheading } from './utils/getSubheading';

// Reducer, który obsługuje akcje dodawania, usuwania i przełączania zadań.
const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, { id: Date.now(), title: action.title, done: false }];
		case 'DELETE_TODO':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE_TODO':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		default:
			throw new Error(`Nieznane działanie: ${action.type}`);
	}
};

export function App() {
	// Zmienna stanu, która przechowuje informację o tym, czy formularz jest widoczny.
	const [isFormShown, setIsFormShown] = useState(false);

	// Zmienna stanu, która przechowuje listę zadań i funkcję dispatch, która pozwala na wywoływanie akcji na liście zadań.
	const [todos, dispatch] = useReducer(todoReducer, [
		{ id: 1, title: 'Umyć okna', done: false },
		{ id: 2, title: 'Zrobić zakupy', done: true },
		{ id: 3, title: 'Zrobić pranie', done: false },
	]);

	// Wywołuje funkcję dispatch z akcją ADD_TODO i tytułem nowego zadania jako argument.
	const addTodo = (title) => {
		dispatch({ type: 'ADD_TODO', title });
	};
	// Wywołuje funkcję dispatch z akcją DELETE_TODO i id usuwanego zadania jako argument.
	const deleteTodo = (id) => {
		dispatch({ type: 'DELETE_TODO', id });
	};
	// Wywołuje funkcję dispatch z akcją TOGGLE_TODO i id przełączanego zadania jako argument.
	const toggleTodo = (id) => {
		dispatch({ type: 'TOGGLE_TODO', id });
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubheading(todos.length)}</h2>
				</div>
				{!isFormShown && (
					<button
						onClick={() => setIsFormShown(true)}
						className={styles.button}>
						+
					</button>
				)}
			</header>
			{isFormShown && <Form addTodo={addTodo} />}
			<ul>
				{todos.map(({ id, title, done }) => (
					<ToDoItem
						key={id}
						done={done}
						toggleTodo={() => toggleTodo(id)}
						deleteTodo={() => deleteTodo(id)}>
						{title}
					</ToDoItem>
				))}
			</ul>
		</div>
	);
}

export default App;
