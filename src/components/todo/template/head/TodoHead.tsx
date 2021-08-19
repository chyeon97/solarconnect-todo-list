import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Converter} from "utils/constants";
const {dates,days} = Converter;

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;
const TimeText = styled.div`
  font-size: 22px;
  color: #3B4E32;
  padding-top: 5px;
  padding-left: 10px;
`;


const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [curntTime, setCurntTime]  =  useState(new Date());
  let dateString:string = dates[curntTime.getMonth()+1] + ' ' + curntTime.getDate() + ', ' + curntTime.getFullYear();
  let dayString:string = days[curntTime.getDay()];
  let timeString:string = curntTime.getHours() + ' :' + curntTime.getMinutes() + ' :' + curntTime.getSeconds();
  useEffect(()=>{
    setTimeout(()=>getTime(), 1000)
    // console.log(curntTime.getDay())
  },[curntTime])

  const getTime = () => {
    setCurntTime(new Date())
  }

  return (
    <TodoHeadBlock>
      <DayText><span role="img">🗓 {dayString}</span></DayText>
      <DateText>{dateString}</DateText>
      
      <TimeText><span role="img">⏰ {timeString}</span></TimeText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
