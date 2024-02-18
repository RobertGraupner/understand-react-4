// Reducer, który obsługuje akcje dodawania, usuwania i przełączania zadań.
export const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [
					...state.todos,
					{ id: Date.now(), title: action.title, done: false },
				],
				isFormShown: false,
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
			};
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id ? { ...todo, done: !todo.done } : todo
				),
			};
		case 'SHOW_FORM':
			return { ...state, isFormShown: true };
		default:
			throw new Error(`Nieznane działanie: ${action.type}`);
	}
};
