// Definiujemy poza komponentem, aby uniknąć tworzenia nowej funkcji przy każdym renderowaniu. Jest niezależna od stanu komponentu, więc nie musi być wewnątrz funkcji App.
export function getSubheading(numberOfTasks) {
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
