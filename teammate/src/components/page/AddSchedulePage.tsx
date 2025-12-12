import React from "react";
import styled from "styled-components";

function AddSchedulePage () {
  return(
    <AddScheduleWrapper>
      {/* 공동 헤더 컴포넌트 추가 */}
            <ScheduleControlBox>
              <ScheduleControl>
        <ScheduleCancell>취소</ScheduleCancell>
        <ScheduleAdd type="submit">추가</ScheduleAdd>
        </ScheduleControl>
        <AddBox>
          <AddTitleBox>
            <TitleTxt placeholder="제목"></TitleTxt>
          </AddTitleBox>
          <Label>
          <CheckBox type="checkbox"/>
          나(동업자)에게만 보이기
          </Label>
        </AddBox>
        <AddBoxContent>
          <SetDate>
            <AllDay>
              <AllDayTxt>하루종일</AllDayTxt>
              <AllDayBtn></AllDayBtn>
            </AllDay>
            <SetStart>
              <SetStartTxt>시작</SetStartTxt>
              <StartDayTime>
                <StartDay></StartDay>
                <StartTime></StartTime>
              </StartDayTime>
            </SetStart>
            <SetEnd>
            <SetStartTxt>종료</SetStartTxt>
              <EndDayTime>
                <EndtDay></EndtDay>
                <EndTime></EndTime>
              </EndDayTime>
            </SetEnd>
          </SetDate>

          <SetRepeat></SetRepeat>
          <SetAlarm></SetAlarm>
          <SetWorker></SetWorker>
        </AddBoxContent>
      </ScheduleControlBox>
    </AddScheduleWrapper>
  )
}

const AddScheduleWrapper = styled.div`
  width: 100%;
  align-items: stretch;`;

  const ScheduleControl = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  `;

//일정 취소 추가
const ScheduleControlBox = styled.div`

  background-color: #fff;
  padding:10px 20px 30px 20px;

  background-color: #fff;
  box-shadow: 0px -1px 6px rgba(198, 198, 198, 0.6);

  height: auto;
  border-radius: 20px 20px 0 0;
  /* min-height: 100hv; */
`;
const ScheduleCancell = styled.button`
border:none;
background-color:#fff;
color: #999999;
font-weight: 500;
cursor: pointer;
`;
const ScheduleAdd = styled.button`
border:none;
background-color:#fff;
color: #4DAFFE;
font-weight: 500;
cursor: pointer;`;

//일정 생성
const AddBox = styled.div`
  display: block;
`;

//제목
const AddTitleBox = styled.div`
 position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 3.5px;
    height: 30px;
    border-radius: 4px;

    background-color: #FFA565;
  }`;

const TitleTxt = styled.input`  
  width: 100%;
  border: none;
  outline: none;
  font-size: 25px;
  font-weight: 550;

  &::placeholder {
    color: #D4D4D4;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

//체크박스
const CheckBox = styled.input.attrs({ type: "checkbox" })`
`;
const Label = styled.div`
color:#999;
font-size: 12px;
align-items: center;
display: flex;
margin-top: 16px;
`;

//날짜, 시간 설정 박스
const AddBoxContent = styled.div``;

const SetDate = styled.div``;
const AllDay = styled.div``;

const AllDayTxt = styled.div``;

const AllDayBtn = styled.div``;
const SetStart = styled.div``;
const SetStartTxt = styled.div``;
const StartDayTime = styled.div``;
const StartDay = styled.div``;
const SetEnd = styled.div``;

const EndDayTime = styled.div``;
const StartTime = styled.div``;


const EndtDay = styled.div``;
const EndTime = styled.div``;

const SetRepeat = styled.div``;
const SetAlarm = styled.div``;
const SetWorker = styled.div``;


export default AddSchedulePage;