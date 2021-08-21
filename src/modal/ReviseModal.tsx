import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { DatePicker } from "antd";
import disableDate from "utils/disableDate";
import { dateFormat } from "utils/constants";
import { Itodo } from "components/todo/TodoService";
import moment from "moment";
import "moment/locale/ko";

const Wrap = styled.div`
	${({ theme }) => theme.flexSet("center", "center", "row")};
`;

const Container = styled.div`
	${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")};
	height: 50px;
`;

const MyInput = styled.input`
	width: 300px;
	border: 1px solid #a7a7a7;
	border-radius: 3px;
	padding: 4px;
	&:focus {
		outline: none;
		border: 2px solid #7c7877;
	}
`;

const Footer = styled.div`
	${({ theme }) => theme.flexSet("flex-end", "center", "row")};
`;

const MyButton = styled.button<{ bcolor: string; color: string }>`
	width: 80px;
	height: 32px;
	margin: 10px;
	color: ${(props) => props.color};
	border: none;
	border-radius: 2px;
	background-color: ${(props) => props.bcolor};
	cursor: pointer;
`;

interface OpenProps {
	open: boolean;
	handleRevise: (status: boolean) => void;
	reviseTodo: (id: number, value: string, date: string) => void;
	todo: Itodo;
}

const Modals = ({ open, handleRevise, reviseTodo, todo }: OpenProps) => {
	const originDate = moment(todo.date).format(dateFormat);
	const [value, setValue] = useState(todo.text);
	const [date, setDate] = useState(originDate);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleDateChange = (value: any, dateString: string) => {
		setDate(dateString);
	};

	const handleCancel = () => {
		handleRevise(false);
	};

	const handleOk = () => {
		reviseTodo(todo.id, value, date);
		handleRevise(false);
	};

	return (
		<>
			<Modal
				centered
				closable={false}
				visible={open}
				footer={[
					<Footer>
						<MyButton bcolor='#dedcee' color='#3E4348' onClick={handleCancel}>
							Cancel
						</MyButton>
						<MyButton bcolor='#6a60a9' color='#fffcf0' onClick={handleOk}>
							OK
						</MyButton>
					</Footer>,
				]}
			>
				<Wrap>
					<Container>
						Todo
						<MyInput autoFocus value={value} onChange={handleInputChange} />
					</Container>
					<Container>
						End date
						<DatePicker
							inputReadOnly
							disabledDate={disableDate}
							allowClear={false}
							value={moment(date)}
							format={dateFormat}
							onChange={handleDateChange}
							placeholder='End date'
							style={{ border: "1px solid #a7a7a7", borderRadius: "3px" }}
						/>
					</Container>
				</Wrap>
			</Modal>
		</>
	);
};
export default React.memo(Modals);
