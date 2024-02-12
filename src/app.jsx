import styles from './app.module.css';
import { Form } from './components/Form/Form';
import { ToDoItem } from './components/ToDoItem/ToDoItem';

// Definiujemy poza komponentem, aby uniknąć tworzenia nowej funkcji przy każdym renderowaniu. Jest niezależna od stanu komponentu, więc nie musi być wewnątrz funkcji App.
function getSubheading(numberOfTasks) {
	switch (true) {
		case numberOfTasks > 4:
			return `${numberOfTasks} zadań`;
		case numberOfTasks > 1:
			return `${numberOfTasks} zadania`;
		case numberOfTasks === 1:
			return `1 zadanie`;
		default:
			return `Brak zadań`;
	}
}

export function App() {
	// początkowe zadania
	const todos = [
		{ id: 1, title: 'Umyć okna', done: false },
		{ id: 2, title: 'Zrobić zakupy', done: true },
		{ id: 3, title: 'Zrobić pranie', done: false },
		{ id: 4, title: 'Zrobić obiad', done: false },
		{ id: 5, title: 'Zrobić kolację', done: false },
	];

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubheading(todos.length)}</h2>
				</div>
				<button className={styles.button}>+</button>
			</header>
			<Form />
			<ul>
				{todos.map((todo) => (
					<ToDoItem key={todo.id} done={todo.done}>
						{todo.title}
					</ToDoItem>
				))}
			</ul>
		</div>
	);
}

export default App;
