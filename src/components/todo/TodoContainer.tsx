import { useTodo } from "./TodoService";
import TodoTemplate from "./template/TodoTemplate";
import TodoHead from "./template/head/TodoHead";
import TodoList from "./template/list/TodoList";
import TodoCreate from "./template/create/TodoCreate";
import TodoFooter from "./template/footer/TodoFooter";
import React from "react";

const TodoContainer = () => {
	const {
		todoState,
		nextIdState,
		incrementNextId,
		toggleTodo,
		removeTodo,
		createTodo,
		reviseTodo,
	} = useTodo();

	return (
		<TodoTemplate>
			<TodoHead />
			<TodoCreate
				nextId={nextIdState}
				createTodo={createTodo}
				incrementNextId={incrementNextId}
			/>
			<TodoList
				toggleTodo={toggleTodo}
				removeTodo={removeTodo}
				reviseTodo={reviseTodo}
				todos={todoState}
			/>
			<TodoFooter todos={todoState} />
		</TodoTemplate>
	);
};

export default TodoContainer;
