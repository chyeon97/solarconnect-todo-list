import { Itodo } from "components/todo/TodoService";
import React from "react";
import styled from "styled-components";

const TodoFooterBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')}
  padding-top: 24px;
  padding-bottom: 24px;
`;

const LeftText = styled.div`
  color: #473fe1;
  font-size: 18px;
`;

interface HooksTodoHeadProps {
  todos: Itodo[];
}

const Todofooter = ({ todos }: HooksTodoHeadProps) => {
  const undoneTasks = todos.filter((todo) => !todo.done);
  return (
    <TodoFooterBlock>
      <LeftText className="tasks-left">
        {undoneTasks.length} items left
      </LeftText>
    </TodoFooterBlock>
  );
};

export default React.memo(Todofooter);
