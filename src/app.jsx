import styles from './app.module.css';
import { Form } from './components/Form/Form';

export function App() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>5 zadań</h2>
				</div>
				<button className={styles.button}>+</button>
			</header>
			<Form />
		</div>
	);
}

export default App;
