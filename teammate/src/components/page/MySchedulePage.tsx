import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DownCaret from "../../assets/Vector.svg";
import Header from "../layouts/HeaderComponent";
import Nav from "../layouts/NavComponent";
import { Link } from "react-router-dom";
import api from "../../lib/axios";
import Footer from "../layouts/TapBarComponent";

function MySchedulePage() {
  //날짜 선택 관리
  const [scheduleCountByDate, setScheduleCountByDate] = useState<
    Record<number, number>
  >({});

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const dates = [
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ]; //임시데이터

  // // 날짜별 일정 개수 (임시)
  // const scheduleCountByDate: Record<number, number> = {
  //   7: 2,
  //   9: 1,
  //   10: 1,
  //   11: 1,
  //   22: 4,
  // };

  //오늘 날짜
  const today = new Date().getDate();
  // const today = 16; //임시날짜(확인용!)

  return (
    <ScheduleWrapper>
      <Title>내일정</Title>
      <ScheduleContainer>
        <Calendar>
          <CalendarDateBox>
            <CalendarDate>2025.12</CalendarDate>
            <CalendarDateImg>
              <img
                src={DownCaret}
                alt="DownCraret"
                style={{ width: "13px", height: "13px" }}
              />
            </CalendarDateImg>
          </CalendarDateBox>

          <CalenderBox>
            <DayOfTheWeekBox>
              <DayOfTheWeek>일</DayOfTheWeek>
              <DayOfTheWeek>월</DayOfTheWeek>
              <DayOfTheWeek>화</DayOfTheWeek>
              <DayOfTheWeek>수</DayOfTheWeek>
              <DayOfTheWeek>목</DayOfTheWeek>
              <DayOfTheWeek>금</DayOfTheWeek>
              <DayOfTheWeek>토</DayOfTheWeek>
            </DayOfTheWeekBox>
            <DayDateBox>
              {dates.map((date, index) => {
                const isSunday = index % 7 === 0;
                return (
                  <DayDate
                    key={index}
                    isToday={date === today}
                    isSelected={date !== null && selectedDate === date}
                    isSunday={isSunday}
                    onClick={() => date && setSelectedDate(date)}
                  >
                    <DateNumber>{date}</DateNumber>

                    {date && scheduleCountByDate[date] && (
                      <DotContainer>
                        {Array.from({ length: scheduleCountByDate[date] }).map(
                          (_, i) => (
                            <Dot key={i} />
                          )
                        )}
                      </DotContainer>
                    )}
                  </DayDate>
                );
              })}
            </DayDateBox>
          </CalenderBox>
        </Calendar>
        <ScheduleBox>
          <ScheduleDate>
            <ScheduleDayDate>7일</ScheduleDayDate>
            <ScheduleDWDate>목</ScheduleDWDate>
          </ScheduleDate>
          {/* {events.length === 0 ? (
            <ScheduleDateNone>등록된 일정이 없습니다.</ScheduleDateNone>
          ) : (
            events.map((event) => (
              <ViewLink
                key={event.eventId}
                to={`/ViewSchedulePage?eventId=${event.eventId}`}
              >
                <SchedulesBox>
                  <Schedules>
                    <Content>
                      <ContentTitle>{event.title}</ContentTitle>
                      <ContentWith>
                        {event.creatorName} with{" "}
                        {event.participantNames.join(", ")}
                      </ContentWith>
                    </Content>

                    <ScheduleTime>
                      <TimeStart>
                        {new Date(event.startDateTime).toLocaleTimeString()}
                      </TimeStart>
                      <TimeFinish>
                        ~ {new Date(event.endDateTime).toLocaleTimeString()}
                      </TimeFinish>
                    </ScheduleTime>
                  </Schedules>
                </SchedulesBox>
              </ViewLink>
            ))
          )} */}

          <ViewLink to="/ViewSchedulePage">
            <SchedulesBox>
              <Schedules>
                <Content>
                  <ContentTitle>정규회의</ContentTitle>
                  <ContentWith>김채연 with 홍길동, 홍길순</ContentWith>
                </Content>
                <ScheduleTime>
                  <TimeStart>10:00 AM</TimeStart>
                  <TimeFinish>~ 18:00 PM</TimeFinish>
                </ScheduleTime>
              </Schedules>
            </SchedulesBox>
          </ViewLink>
          {/* 일정 없음 */}
          <ScheduleDateNone>등록된 일정이 없습니다.</ScheduleDateNone>
        </ScheduleBox>
      </ScheduleContainer>
      <Footer></Footer>
    </ScheduleWrapper>
  );
}

const ScheduleWrapper = styled.div`
  width: 100%;
  align-items: stretch;
`;

const ScheduleContainer = styled.div`
  min-height: 70vh;
  padding: 23px;
  position: relative;
`;

const Calendar = styled.div``;

// 달력 날짜
const CalendarDate = styled.div`
  font-weight: 600;
`;
const CalendarDateBox = styled.div`
  display: flex;
  gap: 3%;
  /* background-color:red; */
`;
const CalendarDateImg = styled.div``;

//달력
const CalenderBox = styled.div`
  margin-top: 8px;
  padding-bottom: 20px;
  /* background-color: #ffffff; */
`;
// 요일
const DayOfTheWeekBox = styled.div`
  color: #7a7a7a;
  gap: 10%;
  font-size: 12px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 16px;
  text-align: center;
  margin: 0 8px 0 8px;
`;

// 날짜
const DayOfTheWeek = styled.div``;
const DayDateBox = styled.div`
  font-weight: 500;
  font-size: 14px;
  gap: 10px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 16px;
  text-align: center;
  place-items: center;
`;
const DayDate = styled.div<{
  isToday?: boolean;
  isSelected?: boolean;
  isSunday?: boolean;
}>`
  height: 32px;
  line-height: 32px;
  cursor: pointer;

  background-color: ${({ isSelected, isToday }) => {
    if (isSelected) return "#BBBBBB"; // 회색 (선택)
    if (isToday) return "#4DAFFE"; // 파랑 (오늘)
    return "transparent";
  }};

  border-radius: 50%;
  width: 30px;
  height: 30px;

  color: ${({ isSunday }) => (isSunday ? "#FF4D4F" : "#000")};

  /* background-color: ${({ isSelected }) =>
    isSelected ? "#CFE3FF" : "transparent"}; */
`;

//일정
const ScheduleBox = styled.div`
  height: auto;
  border-top: 1.8px solid #f0f0f0;
`;
const ScheduleDate = styled.div`
  display: flex;
  gap: 8px;
  font-size: 21px;
  font-weight: 500;
  padding: 14px 0 5px 0;
  /* background-color: red; */
`;
const ScheduleDayDate = styled.div``;
const ScheduleDWDate = styled.div``;

//일정박스
const SchedulesBox = styled.div`
  background-color: #ffa565;
  border-radius: 5px;
  margin-top: 14px;
`;
const Schedules = styled.div`
  background-color: #fff;
  margin-left: 5px;
  border-radius: 5px;
  display: flex;
  padding: 8px 14px 8px 14px;
  justify-content: space-between;
`;
const Content = styled.div``;
const ContentTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
`;
const ContentWith = styled.div`
  font-size: 11px;
  color: #999999;
`;
const ScheduleTime = styled.div`
  text-align: end;
`;
const TimeStart = styled.div``;
const TimeFinish = styled.div`
  color: #999999;
  font-size: 14px;
`;

//일정 없음
const ScheduleDateNone = styled.div`
  /* 가운데정렬 맞추기 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #b1b1b1;
`;

//점
const DateNumber = styled.div`
  line-height: 30px;
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 2px;
`;
const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f4a261; /* 사진 속 주황 */
`;

const ViewLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-left: 23px;
  margin-top: 30px;
`;

export default MySchedulePage;
