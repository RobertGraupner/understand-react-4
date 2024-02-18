import styles from './app.module.css';
import { useState, useReducer } from 'react';
import { Form } from './components/Form/Form';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { getSubheading } from './utils/getSubheading';
import { appReducer } from './reducers/appReducer';

export function App() {
	// Zmienna stanu, która przechowuje listę zadań i funkcję dispatch, która pozwala na wywoływanie akcji na liście zadań.
	// Funkcja useReducer przyjmuje jako argument reducer i początkowy stan.
	// Mozna było zrobić destrukturyzacje zamiast state.todos {todos, isFormShown}
	const [state, dispatch] = useReducer(appReducer, {
		todos: [
			{ id: 1, title: 'Umyć okna', done: false },
			{ id: 2, title: 'Zrobić zakupy', done: true },
			{ id: 3, title: 'Zrobić pranie', done: false },
		],
		isFormShown: false,
	});

	// Wywołuje funkcję dispatch z akcją ADD_TODO i tytułem nowego zadania jako argument.
	const addTodo = (title) => {
		// Funkcja dispatch przyjmuje jako argument obiekt akcji, który zawiera typ akcji i dodatkowe dane.
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

	const showForm = () => {
		dispatch({ type: 'SHOW_FORM' });
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubheading(state.todos.length)}</h2>
				</div>
				{!state.isFormShown && (
					<button onClick={showForm} className={styles.button}>
						+
					</button>
				)}
			</header>
			{state.isFormShown && <Form addTodo={addTodo} />}
			<ul>
				{state.todos.map(({ id, title, done }) => (
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
