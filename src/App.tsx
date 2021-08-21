import React from "react";
import "antd/dist/antd.css";
import Spinner from "./components/common/Spinner";
import TodoContainer from "./components/todo/TodoContainer";
import styled from "styled-components";

const Container = styled.div`
	${({ theme }) => theme.flexSet()}
	position:relative;
	height: 100vh;
	background: linear-gradient(#4b346a, #201e4f);
`;

function App() {
	//@TODO login
	let isLogged = true;

	const RenderLayout = (
		<Container>
			<TodoContainer />
		</Container>
	);

	return isLogged ? RenderLayout : <Spinner mask />;
}

export default App;
