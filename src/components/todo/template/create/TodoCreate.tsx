import moment from 'moment';
import 'moment/locale/ko';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import { DatePicker } from 'antd';

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  cursor: pointer;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  position:relative;
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  position:relative;
  padding: 10px 46px 10px 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;


interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId
}: TodoCreateProps) => {
  const dateFormat = 'YYYY/MM/DD';
  const today = moment().format(dateFormat)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(today)

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (value === "") {
      return
    }
    createTodo({
      id: nextId,
      text: value,
      date: date,
      done: false
    });
    incrementNextId(); // nextId 하나 증가

    setValue(""); // input 초기화
    setDate(today); // date 오늘 날짜로 초기화
    setOpen(false); // open 닫기
  };

  const onChangeDate = (value: any, dateString: string) => {
    setDate(dateString)
  }

  const disableDate = (current: object) => {
    return current && current < moment().endOf('day');
  }

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder={"What's need to be done ?"}
            onChange={handleChange}
            value={value}
          />
          <DatePicker
            inputReadOnly
            disabledDate={disableDate}
            allowClear={false}
            value={moment(date)}
            format={dateFormat}
            placeholder="End date"
            onChange={onChangeDate}
            style={{ width: '30%', }}
          />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
