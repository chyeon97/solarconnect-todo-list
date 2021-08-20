import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Converter } from "utils/constants";
const { dates, days } = Converter;

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  padding-bottom: 15px;
  border-bottom: 3px solid #473fe1;
`;

const Wrap = styled.div`
  width:25%;
  display:flex;
  flex-direction: column;
`

const Container = styled.div`
  width:78%;
    ${({ theme }) => theme.flexSet('space-between', 'flex-start', 'row')}


`
const DateText = styled.div`
  font-size: 20px;
  color: #a3a1a1;
  font-weight:400;
`;

const DayText = styled.div<{ bold: boolean }>`
  font-size: 25px;
  color: #473fe1;
  padding-top: 5px;
    ${(props) =>
    props.bold ?
      css`
      font-weight: 500;
    `:
      css`
      font-weight: 300;
    `
  }
`;

const TimeText = styled.div<{ size: number }>`
  width:100%;
  font-size: ${(props) => props.size}px;
  color: #a3a1a1;
  ${({ theme }) => theme.flexSet('flex-end', 'flex-end', 'row')}
`;


const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [curntTime, setCurntTime] = useState(new Date());
  const month_year: string = dates[curntTime.getMonth() + 1] + ', ' + curntTime.getFullYear();
  const dayString: string = days[curntTime.getDay()] + ', ';
  const date: string = curntTime.getDate() + 'th';
  let hour: string = curntTime.getHours().toString().length < 2 ? '0' + curntTime.getHours().toString() : curntTime.getHours().toString();
  let minute: string = curntTime.getMinutes().toString().length < 2 ? '0' + curntTime.getMinutes().toString() : curntTime.getMinutes().toString();
  let seconds: string = curntTime.getSeconds().toString().length < 2 ? '0' + curntTime.getSeconds().toString() : curntTime.getSeconds().toString();
  let timeString: string = hour + ' : ' + minute + ' : ' + seconds;
  useEffect(() => {
    setTimeout(() => getTime(), 1000)
  }, [curntTime])

  const getTime = () => {
    setCurntTime(new Date())
  }

  return (
    <TodoHeadBlock>
      <Wrap>
        <Container>
          <DayText bold={true}>{dayString}</DayText>
          <DayText bold={false}>{date}</DayText>
        </Container>
        <DateText>{month_year}</DateText>
      </Wrap>
      <Wrap style={{ justifyContent: 'flex-end' }}>
        <TimeText size={14}>
          current Time
        </TimeText>
        <TimeText size={20}>
          {timeString}
        </TimeText>
      </Wrap>

    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
