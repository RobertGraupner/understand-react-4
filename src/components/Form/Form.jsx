import { Button } from '../Button/Button';
import styles from './Form.module.css';

export function Form() {
	return (
		<form className={styles.form}>
			<input className={styles.input} type='text' />
			<Button onClick={() => alert('działa')}>Dodaj</Button>
		</form>
	);
}
