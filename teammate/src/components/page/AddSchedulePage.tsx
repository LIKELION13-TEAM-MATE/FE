import React, { useState } from "react";
import styled from "styled-components";
import Plugin from "../../assets/Plugin.svg"
import outline from "../../assets/code-outline.svg"
import Stroke from "../../assets/Stroke.svg"
import fPlugin from "../../assets/fPlugin.svg"

function AddSchedulePage () {
  const [title, setTitle] = useState("");
  const [startDay, setStartDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDay, setEndDay] = useState("");
  const [endTime, setEndTime] = useState("");
  const [memo, setMemo] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log({
    title,
    startDay,
    startTime,
    endDay,
    endTime,
    memo,
    isPrivate,
  });
};

// 글씨 색 변경
const [repeat, setRepeat] = useState("안함");
const [alarm, setAlarm] = useState("안함");
const [worker, setWorker] = useState("없음");

// 하루종일
const [isAllDay, setIsAllDay] = useState(false);


  return(
    <AddScheduleWrapper>
      {/* 공동 헤더 컴포넌트 추가 */}
            <ScheduleControlBox onSubmit={handleSubmit}>
              <ScheduleControl>
        <ScheduleCancell>취소</ScheduleCancell>
        <ScheduleAdd type="submit">추가</ScheduleAdd>
        </ScheduleControl>
        <AddBox>
          <AddTitleBox>
            <TitleTxt value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목"></TitleTxt>
          </AddTitleBox>
          <Label>
          <CheckBox checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} type="checkbox"/>
          나(동업자)에게만 보이기
          </Label>
        </AddBox>
        <AddBoxContent>
          <SetDate>
          <AllDay>
            <AllDayTxt> 하루종일</AllDayTxt>

            {!isAllDay && (
              <AllDayBtn onClick={() => setIsAllDay(true)}>
                <img src={Plugin} alt="Plugin" style={{ width: "40px", height: "40px" }} />
              </AllDayBtn>
            )}

            {isAllDay && (
              <FAllDayBtn onClick={() => setIsAllDay(false)}>
                <img src={fPlugin} alt="fPlugin" style={{ width: "40px", height: "40px" }} />
              </FAllDayBtn>
            )}
          </AllDay>
            <SetStart>
              <SetStartTxt> 시작</SetStartTxt>
              <StartDayTime>
                <StartDay value={startDay} onChange={(e) => setStartDay(e.target.value)}/>
                <StartTime value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
              </StartDayTime>
            </SetStart>
            <SetEnd>
            <SetStartTxt> 종료</SetStartTxt>
              <EndDayTime>
                <EndtDay value={endDay} onChange={(e) => setEndDay(e.target.value)}/>
                <EndTime value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
              </EndDayTime>
            </SetEnd>
          </SetDate>

          <SetRepeat>
            <SetReTxt>반복</SetReTxt>
            <SetReBox>
            <SetRe value={repeat} onChange={(e) => setRepeat(e.target.value)} selected={repeat !== "안함"}> 
              <option>안함</option>
              <option>매일</option>
              <option>매주</option>
              <option>2주마다</option>
              <option>매월</option>
              <option>매년</option>
          </SetRe>
            {/* <Repeat><img src={outline} alt="outline" style={{ width:'18px', height:'18px', marginTop:'3px'  }}/></Repeat> */}
            </SetReBox>
          </SetRepeat>

          <SetAlarm>
            <SetAlTxt>알림</SetAlTxt>
            <SetAlBox>
            <SetAl value={alarm} onChange={(e) => setAlarm(e.target.value)} selected={alarm !== "안함"}>
              <option>안함</option>
              <option>매일</option>
              <option>매주</option>
              <option>2주마다</option>
              <option>매월</option>
              <option>매년</option>
              </SetAl>
            {/* <Alarm><img src={outline} alt="outline" style={{ width:'18px', height:'18px', marginTop:'3px' }}/></Alarm> */}
            </SetAlBox>
          </SetAlarm>

          <SetWorker>
            <SetWoTxt>동업자</SetWoTxt>
            <SetWoBox>
            <SetWo value={worker} onChange={(e) => setWorker(e.target.value)} selected={worker !== "없음"}>
              <option>없음</option>
              <option>김채연</option>
              <option>홍길동</option>
              <option>홍길순</option>
              <option>모두</option>
            </SetWo>
            {/* <Worker><img src={Stroke} alt="Stroke" style={{ width:'10px', height:'10px', marginLeft:'4px', marginTop:'7px' }}/></Worker> */}
            </SetWoBox>
            <SetCoWo>홍길동</SetCoWo>
          </SetWorker>

          <SetMemo>
            <Memo value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="메모"/>
          </SetMemo>

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
const ScheduleControlBox = styled.form`
  
  background-color: #fff;
  padding:10px 20px 30px 20px;

  background-color: #fff;
  box-shadow: 0px -1px 6px rgba(198, 198, 198, 0.6);

  height: auto;
  border-radius: 20px 20px 0 0;
  position: absolute;
  bottom: 0;
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
  accent-color: #999999;
`;
const Label = styled.div`
  color:#999;
  font-size: 12px;
  align-items: center;
  display: flex;
  margin-top: 16px;
`;

//날짜, 시간 설정 박스
const AddBoxContent = styled.div`
`;

const SetDate = styled.div`
  margin-top: 10px;
  border: 1px solid #dbdbdb ;
  border-radius: 15px;
  padding: 10px;
  color: #999999;
  font-size: 14px;
`;

// 하루종일
const AllDay = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AllDayTxt = styled.div``;
const AllDayBtn = styled.div`
  padding-right: 10px;
  cursor: pointer;
`;
const FAllDayBtn = styled.div`
  padding-right: 10px;
  cursor: pointer;
`;
const SetStart = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 시작
const SetStartTxt = styled.div``;
const StartDayTime = styled.div`
  margin-right: 10px;
`;
const StartDay = styled.input.attrs({ type: "date" })`
  margin-right: 10px;
  background-color: #EEEEEF;
  border:none;
  border-radius: 8px;
  padding: 5px;
  font-weight: 600;
`;
const StartTime = styled.input.attrs({ type: "time" })`
  background-color: #EEEEEF;
  border:none;
  border-radius: 8px;
  padding: 5px;
  font-weight: 600;
`;

// 종료
const SetEnd = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EndDayTime = styled.div`
  margin-right: 10px;
`;
const EndtDay = styled.input.attrs({ type: "date" })`
  margin-right: 10px;
  background-color: #EEEEEF;
  border:none;
  border-radius: 8px;
  padding: 5px;
  font-weight: 600;
`;
const EndTime = styled.input.attrs({ type: "time" })`
  background-color: #EEEEEF;
  border:none;
  border-radius: 8px;
  padding: 5px;
  font-weight: 600;
`;

// 반복
const SetRepeat = styled.div`
  margin-top: 18px;
  border: 1px solid #dbdbdb ;
  border-radius: 15px;
  padding: 10px;
  color: #999999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SetReTxt = styled.div`
`;
const SetReBox = styled.div`
  display: flex;
  gap:5px;
  margin-right: 10px;
  align-items: center;
`;
const SetRe = styled.select<{ selected: boolean }>`
  border: none;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#000" : "#999")};
`;
// const Repeat = styled.div`
//   cursor: pointer;
// `;


// 알림
const SetAlarm = styled.div`
  margin-top: 18px;
  border: 1px solid #dbdbdb ;
  border-radius: 15px;
  padding: 10px;
  color: #999999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SetAlTxt = styled.div``;
const SetAlBox = styled.div`
  display: flex;
  gap:5px;
  margin-right: 10px;
  align-items: center;
`;
const SetAl = styled.select<{ selected: boolean }>`
  border: none;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#000" : "#999")};
`;
// const Alarm = styled.div`
//   cursor: pointer;
// `;

// 동업자
const SetWorker = styled.div`
  margin-top: 18px;
  border: 1px solid #dbdbdb ;
  border-radius: 15px;
  padding: 10px;
  color: #999999;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const SetWoTxt = styled.div``;
const SetCoWo = styled.div`
  color: black;
  display: none;
  font-size: 12.6px;
`;
const SetWoBox = styled.div`
  display: flex;
  gap:5px;
  margin-right: 10px;
  align-items: center;
`;
const SetWo = styled.select<{ selected: boolean }>`
  border: none;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#000" : "#999")};
`;
// const Worker = styled.div`
//   cursor: pointer;
// `;

// 메모
const SetMemo = styled.div`
  margin-top: 18px;
  border: 1px solid #dbdbdb ;
  border-radius: 15px;
  padding: 10px;
  color: #999999;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  `;

const Memo = styled.textarea`
  resize: none;  
  outline: none;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  font-family:none ;
  border: none;

    &::placeholder {
    color: #D4D4D4;
    font-size: 14px;
  }
`;


export default AddSchedulePage;