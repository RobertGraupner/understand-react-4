import styles from './app.module.css';
import { useState } from 'react';
import { Form } from './components/Form/Form';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { getSubheading } from './utils/getSubheading';

export function App() {
	// Zmienna stanu, która przechowuje informację o tym, czy formularz jest widoczny.
	const [isFormShown, setIsFormShown] = useState(false);

	// początkowe zadania
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Umyć okna', done: false },
		{ id: 2, title: 'Zrobić zakupy', done: true },
		{ id: 3, title: 'Zrobić pranie', done: false },
	]);
	// funkcja addTodo, która przyjmuje tytuł nowego zadania jako argument, tworzy nowe zadanie i dodaje je do listy zadań.
	const addTodo = (title) => {
		const newTodo = { id: Date.now(), title, done: false };
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};
	// funkcja deleteTodo, która przyjmuje id zadania jako argument i usuwa je z listy zadań.
	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};
	// funkcja toggleTodo, która przyjmuje id zadania jako argument i zmienia jego status na zrobione lub niezrobione.
	const toggleTodo = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		);
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
				{todos.map((todo) => (
					<ToDoItem
						key={todo.id}
						done={todo.done}
						toggleTodo={() => toggleTodo(todo.id)}
						deleteTodo={() => deleteTodo(todo.id)}>
						{todo.title}
					</ToDoItem>
				))}
			</ul>
		</div>
	);
}

export default App;
