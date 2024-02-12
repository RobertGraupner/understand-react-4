import { Button } from '../Button/Button';
import styles from './ToDoItem.module.css';

export function ToDoItem({ children, done, toggleTodo, deleteTodo, id }) {
	return (
		<li className={styles.list}>
			<span className={`${styles.name} ${done ? styles.done : ''}`}>
				{children}
			</span>
			{!done && <Button onClick={() => toggleTodo(id)}>Zrobione</Button>}
			<Button onClick={() => deleteTodo(id)}>Usuń</Button>
		</li>
	);
}
