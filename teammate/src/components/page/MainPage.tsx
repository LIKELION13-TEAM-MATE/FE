import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from '../../style/MainPageStyled';

import TapBar from "../layouts/TapBarComponent";

import alarmIcon from "../../img/alarm.svg";
import plusIcon from "../../img/AddNew.svg";
import sideIcon from "../../img/right.svg";
import logo from "../../img/Logo.svg"

function MainPage() {
    const navigate = useNavigate();
    
  return (
    <M.container>
      <M.header>
        <M.logoBox>
            <M.logo src={logo}></M.logo>
        </M.logoBox>
        <M.alarm src={alarmIcon}></M.alarm>
      </M.header>
      <M.newProject>
        <M.newProjectTitle>새 프로젝트 만들기</M.newProjectTitle>
        <M.newProjectBtn>
            <M.plus src={plusIcon}></M.plus>
            <M.newProjectBtnContent onClick={() => navigate("/new")}>프로젝트 생성</M.newProjectBtnContent>
        </M.newProjectBtn>
        <M.newProjectContent>생성 후 초대 링크를 통해 팀원을 초대하세요!</M.newProjectContent>
      </M.newProject>
      <M.ingProject>
        <M.ingProjectHeader>
            <M.ingProjectTitleBox>
                <M.ingProjectMiniTitle>내 프로젝트</M.ingProjectMiniTitle>
                <M.ingProjectTitle>진행 중인 프로젝트</M.ingProjectTitle>
            </M.ingProjectTitleBox>
            <M.ingProjectCount>2개</M.ingProjectCount>
        </M.ingProjectHeader>
        <M.ingProjectBody>
            <M.ingProjectBox>
                <M.ingProjectContent>⭐ 경영 교양 팀플</M.ingProjectContent>
                <M.ingProjectDdayBox>
                    <M.ingProjectDday dday={3} >D-3</M.ingProjectDday>
                    <M.ingProjectColor color="#E6D4FF"></M.ingProjectColor>
                </M.ingProjectDdayBox>
            </M.ingProjectBox>
            <M.ingProjectBox onClick={() => navigate("/board/1")}>
                <M.ingProjectContent>멋사 데모데이</M.ingProjectContent>
                <M.ingProjectDdayBox>
                    <M.ingProjectDday dday={16} >D-16</M.ingProjectDday>
                    <M.ingProjectColor color="#FFD79E"></M.ingProjectColor>
                </M.ingProjectDdayBox>
            </M.ingProjectBox>
            <M.endProject>
                <M.sideIcon src={sideIcon}></M.sideIcon>
                <M.endProjectContent onClick={() => navigate("/complete")}>완료된 프로젝트</M.endProjectContent>
            </M.endProject>
        </M.ingProjectBody>
      </M.ingProject>
      <M.mySchedule>
        <M.myScheduleTitle>내 일정</M.myScheduleTitle>
        <M.myScheduleContent>
            <M.calendar>
                <M.yearMonth>2025.11</M.yearMonth>
                <M.week>
                    <M.daySet>
                        <M.dayOfTheWeek>일</M.dayOfTheWeek>
                        <M.day>5</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>월</M.dayOfTheWeek>
                        <M.day>6</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>화</M.dayOfTheWeek>
                        <M.day isToday={true} >7</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>수</M.dayOfTheWeek>
                        <M.day>8</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>목</M.dayOfTheWeek>
                        <M.day>9</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>금</M.dayOfTheWeek>
                        <M.day>10</M.day>
                    </M.daySet>
                    <M.daySet>
                        <M.dayOfTheWeek>토</M.dayOfTheWeek>
                        <M.day>11</M.day>
                    </M.daySet>
                </M.week>
            </M.calendar>
            <M.toDo>
                <M.toDoBigBox>
                    <M.date>오늘</M.date>
                    <M.toDoBox color="#E6D4FF">
                        <M.toDoContentBigBox>
                            <M.toDoContentBox>
                                <M.toDoTitle>PPT 만들기</M.toDoTitle>
                                <M.toDoCategoryBox>
                                    <M.miniColor color="#E6D4FF"></M.miniColor>
                                    <M.toDoCategory>경영 교양 팀플</M.toDoCategory>
                                </M.toDoCategoryBox>
                            </M.toDoContentBox>
                            <M.Time></M.Time>
                        </M.toDoContentBigBox>
                    </M.toDoBox>
                    <M.toDoBox color="#E6D4FF">
                        <M.toDoContentBigBox>
                            <M.toDoContentBox>
                                <M.toDoTitle>발표 대본 짜기</M.toDoTitle>
                                <M.toDoCategoryBox>
                                    <M.miniColor color="#E6D4FF"></M.miniColor>
                                    <M.toDoCategory>경영 교양 팀플</M.toDoCategory>
                                </M.toDoCategoryBox>
                            </M.toDoContentBox>
                            <M.Time>9:00 PM</M.Time>
                        </M.toDoContentBigBox>
                    </M.toDoBox>
                </M.toDoBigBox>
                <M.toDoBigBox>
                    <M.date>내일</M.date>
                    <M.toDoBox color="#FFD79E">
                        <M.toDoContentBigBox>
                            <M.toDoContentBox>
                                <M.toDoTitle>정기 회의</M.toDoTitle>
                                <M.toDoCategoryBox>
                                    <M.miniColor color="#FFD79E"></M.miniColor>
                                    <M.toDoCategory>멋사 데모데이</M.toDoCategory>
                                </M.toDoCategoryBox>
                            </M.toDoContentBox>
                            <M.Time>10:00 AM</M.Time>
                        </M.toDoContentBigBox>
                    </M.toDoBox>
                </M.toDoBigBox>
            </M.toDo>
        </M.myScheduleContent>
      </M.mySchedule>
      <TapBar/>
    </M.container>
  );
}


export default MainPage;