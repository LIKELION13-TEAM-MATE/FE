import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import * as M from '../../style/MainPageStyled';
import api from "../../lib/axios";

import TapBar from "../layouts/TapBarComponent";

import alarmIcon from "../../img/alarm.svg";
import plusIcon from "../../img/AddNew.svg";
import sideIcon from "../../img/right.svg";
import logo from "../../img/Logo.svg"

function MainPage() {
  const navigate = useNavigate();

  interface Project {
    id: number;
    projectName: string;
    category: string;
    deadline: string;
    themeColor: string;
    dday: number;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  // D-DAY 계산
  const calculateDday = (deadline: string): number => {
    const today = new Date();
    const end = new Date(deadline);

    today.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  // ------------------------------
  // 📌 API 연동 - 실제 데이터 불러오기
  // ------------------------------
  useEffect(() => {
    api
      .get("/api/v1/projects")
      .then((res) => {
        console.log("프로젝트 목록:", res.data);

        const processed = res.data.map((p: Project) => ({
          ...p,
          dday: calculateDday(p.deadline),
        }));

        setProjects(processed);
      })
      .catch((err) => {
        console.error("프로젝트 목록 조회 실패:", err);

        // 실패했을 때 임시 더미 사용(옵션)
        setProjects([
          {
            id: 0,
            projectName: "⭐ 경영 교양 팀플",
            category: "",
            deadline: "2025-12-20",
            themeColor: "#E6D4FF",
            dday: calculateDday("2025-12-20")
          },
          {
            id: 1,
            projectName: "멋사 데모데이",
            category: "",
            deadline: "2025-12-31",
            themeColor: "#FFD79E",
            dday: calculateDday("2025-12-31")
          }
        ]);
      });
  }, []);

  return (
    <M.container>
      <M.header>
        <M.logoBox>
          <M.logo src={logo} />
        </M.logoBox>
        <M.alarm src={alarmIcon} />
      </M.header>

      {/* 새 프로젝트 생성 */}
      <M.newProject>
        <M.newProjectTitle>새 프로젝트 만들기</M.newProjectTitle>

        <M.newProjectBtn onClick={() => navigate("/new")}>
          <M.plus src={plusIcon} />
          <M.newProjectBtnContent>
            프로젝트 생성
          </M.newProjectBtnContent>
        </M.newProjectBtn>

        <M.newProjectContent>
          생성 후 초대 링크를 통해 팀원을 초대하세요!
        </M.newProjectContent>
      </M.newProject>

      {/* 내 프로젝트 */}
      <M.ingProject>
        <M.ingProjectHeader>
          <M.ingProjectTitleBox>
            <M.ingProjectMiniTitle>내 프로젝트</M.ingProjectMiniTitle>
            <M.ingProjectTitle>진행 중인 프로젝트</M.ingProjectTitle>
          </M.ingProjectTitleBox>

          <M.ingProjectCount>{projects.length}개</M.ingProjectCount>
        </M.ingProjectHeader>

        <M.ingProjectBody>
          {projects.map((project) => (
            <M.ingProjectBox
              key={project.id}
              onClick={() => navigate(`/board/${project.id}`)}
            >
              <M.ingProjectContent>{project.projectName}</M.ingProjectContent>

              <M.ingProjectDdayBox>
                <M.ingProjectDday dday={project.dday}>
                  {project.dday >= 0
                    ? `D-${project.dday}`
                    : `D+${Math.abs(project.dday)}`}
                </M.ingProjectDday>
                <M.ingProjectColor color={project.themeColor} />
              </M.ingProjectDdayBox>
            </M.ingProjectBox>
          ))}

          {/* 완료된 프로젝트 이동 */}
          <M.endProject>
            <M.sideIcon src={sideIcon} />
            <M.endProjectContent onClick={() => navigate("/complete")}>
              완료된 프로젝트
            </M.endProjectContent>
          </M.endProject>
        </M.ingProjectBody>
      </M.ingProject>

      {/* 일정 */}
      <M.mySchedule>
        <M.myScheduleTitle>내 일정</M.myScheduleTitle>

        <M.myScheduleContent>
          <M.calendar>
            <M.yearMonth>2025.12</M.yearMonth>
            <M.week>
              <M.daySet><M.dayOfTheWeek>일</M.dayOfTheWeek><M.day>14</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>월</M.dayOfTheWeek><M.day>15</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>화</M.dayOfTheWeek><M.day>16</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>수</M.dayOfTheWeek><M.day>17</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>목</M.dayOfTheWeek><M.day>18</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>금</M.dayOfTheWeek><M.day isToday>19</M.day></M.daySet>
              <M.daySet><M.dayOfTheWeek>토</M.dayOfTheWeek><M.day>20</M.day></M.daySet>
            </M.week>
          </M.calendar>

          {/* 일정 더미 */}
          <M.toDo>
            {/* 오늘 일정 */}
            <M.toDoBigBox>
              <M.date>오늘</M.date>

              <M.toDoBox color="#E6D4FF">
                <M.toDoContentBigBox>
                  <M.toDoContentBox>
                    <M.toDoTitle>PPT 만들기</M.toDoTitle>
                    <M.toDoCategoryBox>
                      <M.miniColor color="#E6D4FF" />
                      <M.toDoCategory>경영 교양 팀플</M.toDoCategory>
                    </M.toDoCategoryBox>
                  </M.toDoContentBox>
                  <M.Time />
                </M.toDoContentBigBox>
              </M.toDoBox>

              <M.toDoBox color="#E6D4FF">
                <M.toDoContentBigBox>
                  <M.toDoContentBox>
                    <M.toDoTitle>발표 대본 짜기</M.toDoTitle>
                    <M.toDoCategoryBox>
                      <M.miniColor color="#E6D4FF" />
                      <M.toDoCategory>경영 교양 팀플</M.toDoCategory>
                    </M.toDoCategoryBox>
                  </M.toDoContentBox>
                  <M.Time>9:00 PM</M.Time>
                </M.toDoContentBigBox>
              </M.toDoBox>
            </M.toDoBigBox>

            {/* 내일 일정 */}
            <M.toDoBigBox>
              <M.date>내일</M.date>

              <M.toDoBox color="#FFD79E">
                <M.toDoContentBigBox>
                  <M.toDoContentBox>
                    <M.toDoTitle>정기 회의</M.toDoTitle>
                    <M.toDoCategoryBox>
                      <M.miniColor color="#FFD79E" />
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

      <TapBar />
    </M.container>
  );
}

export default MainPage;
