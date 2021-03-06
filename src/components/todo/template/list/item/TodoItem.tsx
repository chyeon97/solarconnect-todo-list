import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import ReviseModal from "modal/ReviseModal";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e71d36;
	font-size: 16px;
	cursor: pointer;
`;

const Revise = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #8283a7;
	font-size: 16px;
	width: 5%;
	cursor: pointer;
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;
	&:hover {
		${Remove} {
			display: initial;
		}
	}
`;

const CheckCircle = styled.div<{ done: boolean }>`
	width: 20px;
	height: 20px;
	border-radius: 16px;
	border: 2px solid #8283a7;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			border: 2px solid #dddddd;
			color: #dddddd;
		`}
`;

const Text = styled.div<{ done: boolean }>`
	flex: 1;
	font-size: 16px;
	color: #343838;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
			text-decoration: line-through;
		`}
`;

const Date = styled.div<{ done: boolean }>`
	flex: 1;
	font-size: 16px;
	color: #3f4b3b;
	text-align: right;
	padding-right: 20px;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
			text-decoration: line-through;
		`}
`;

interface TodoItemProps {
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
	reviseTodo: (id: number, value: string, date: string) => void;
	todo: Itodo;
}

const TodoItem = ({
	toggleTodo,
	removeTodo,
	reviseTodo,
	todo,
}: TodoItemProps) => {
	const [done, setDone] = useState(todo.done);
	const [openModal, setOpenModal] = useState(false);
	const handleToggle = () => {
		done ? setDone(false) : setDone(true);
		toggleTodo(todo.id);
	};

	const handleRemove = () => {
		removeTodo(todo.id);
	};

	const handleRevise = (status: boolean): void => {
		setOpenModal(status);
	};
	return (
		<>
			<TodoItemBlock>
				<CheckCircle done={done} onClick={handleToggle}>
					{done && <CheckOutlined />}
				</CheckCircle>
				<Text done={done}>{todo.text}</Text>
				<Date done={done}>{todo.date}</Date>
				<Revise onClick={() => handleRevise(true)}>
					{!done && <EditOutlined />}
				</Revise>
				<Remove onClick={handleRemove}>
					<DeleteOutlined />
				</Remove>
			</TodoItemBlock>
			{openModal && (
				<ReviseModal
					open={openModal}
					handleRevise={handleRevise}
					reviseTodo={reviseTodo}
					todo={todo}
				/>
			)}
		</>
	);
};

export default React.memo(TodoItem);
