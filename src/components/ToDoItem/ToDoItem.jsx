import { Button } from '../Button/Button';
import styles from './ToDoItem.module.css';

export function ToDoItem({ children, done }) {
	return (
		<li className={styles.list}>
			<span className={`${styles.name} ${done ? styles.done : ''}`}>
				{children}
			</span>
			{!done && <Button>Zrobione</Button>}
			<Button>Usuń</Button>
		</li>
	);
}
