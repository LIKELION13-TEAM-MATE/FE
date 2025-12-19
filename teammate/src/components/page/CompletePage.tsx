import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import api from "../../lib/axios";

import TapBar from "../layouts/TapBarComponent";

function CompletePage() {
  interface Project {
    id: number;
    projectName: string;
    themeColor: string;
    deadline: string;
    dday: number;
  }

  interface CompletedProject {
    id: number;
    projectName: string;
    themeColor: string;
    completedDate: string;
  }

  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);
  const [completedProjects, setCompletedProjects] = useState<CompletedProject[]>([]);

  // ------------------------------
  // 📌 D-day 계산
  // ------------------------------
  const calculateDday = (deadline: string): number => {
    const today = new Date();
    const end = new Date(deadline);

    today.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  // ------------------------------
  // 📌 API 연동 - 프로젝트 리스트 조회
  // ------------------------------
  useEffect(() => {
    api
      .get("/api/v1/projects")
      .then((res) => {
        console.log("프로젝트 목록:", res.data);

        const ongoing: Project[] = [];
        const completed: CompletedProject[] = [];

        res.data.forEach((p: any) => {
          const dday = calculateDday(p.deadline);

          if (dday >= 0) {
            // 진행 중
            ongoing.push({
              ...p,
              dday,
            });
          } else {
            // 완료된 프로젝트 = 날짜 지난 프로젝트
            completed.push({
              id: p.id,
              projectName: p.projectName,
              themeColor: p.themeColor,
              completedDate: p.deadline.replace(/-/g, "."),
            });
          }
        });

        setOngoingProjects(ongoing);
        setCompletedProjects(completed);
      })
      .catch((err) => {
        console.error("프로젝트 조회 실패:", err);
      });
  }, []);

  return (
    <Container>
      <Title>프로젝트 보관함</Title>

      {/* 진행 중 프로젝트 */}
      <ProjectBigBox>
        <ProjectTop>
          <ProjectTitle>진행 중인 프로젝트</ProjectTitle>
          <ProjectCount>{ongoingProjects.length}개</ProjectCount>
        </ProjectTop>

        {ongoingProjects.map((project) => (
          <ProjectBox key={project.id}>
            <ProjectContent>{project.projectName}</ProjectContent>

            <ProjectDdayBox>
              <ProjectDday dday={project.dday}>
                {project.dday >= 0 ? `D-${project.dday}` : `D+${Math.abs(project.dday)}`}
              </ProjectDday>
              <ProjectColor color={project.themeColor} />
            </ProjectDdayBox>
          </ProjectBox>
        ))}
      </ProjectBigBox>

      {/* 완료된 프로젝트 */}
      <ProjectBigBox className="complete">
        <ProjectTop>
          <ProjectTitle>완료된 프로젝트</ProjectTitle>
        </ProjectTop>

        {completedProjects.map((project) => (
          <ProjectBox key={project.id}>
            <ProjectContent>{project.projectName}</ProjectContent>

            <ProjectDdayBox>
              <ProjectDate>{project.completedDate}</ProjectDate>
              <ProjectColor color={project.themeColor} />
            </ProjectDdayBox>
          </ProjectBox>
        ))}
      </ProjectBigBox>

      <TapBar />
    </Container>
  );
}

export default CompletePage;

//Styled Components 

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    gap: 30px;
    p{
        margin: 0;
        font-family: Pretendard;
    }
    div{
        box-sizing: border-box;
    }
`

const Title = styled.span`
  width: 345px;
  color: #21272A;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.24px;
  margin-top: 40px;
  font-family: Pretendard;
`

const ProjectTop = styled.div`
  width: 345px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`

const ProjectTitle = styled.p`
  color:#21272A;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
`

const ProjectCount = styled.div`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #4DAFFE;
  box-shadow: 0 2px 4px 0 rgba(134, 134, 134, 0.25);
  color: #FFF;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.16px;

`

const ProjectBigBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &.complete{
    margin-top: 10px;
  }
`

const ProjectBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
  width: 345px;
  box-sizing: border-box;
`

const ProjectContent = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.96px;
`

const ProjectDdayBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ProjectDday = styled.p<{ dday: number }>`
  color: ${(props) => (props.dday <= 7 ? "#FD1414" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.84px;
`

const ProjectDate = styled.p`
  color: #7A7A7A;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.72px;
`

const ProjectColor = styled.div<{ color?: string }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${(props) => props.color || "#4DAFFE"};
`