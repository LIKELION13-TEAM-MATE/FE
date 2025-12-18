import React from 'react'
import styled from "styled-components";

import TapBar from "../layouts/TapBarComponent";

function CompletePage() {
  return (
    <Container>
      <Title>프로젝트 보관함</Title>
      <ProjectBigBox>
        <ProjectTop>
          <ProjectTitle>진행 중인 프로젝트</ProjectTitle>
          <ProjectCount>2개</ProjectCount>
        </ProjectTop>
        <ProjectBox>
          <ProjectContent>⭐ 경영 교양 팀플</ProjectContent>
          <ProjectDdayBox>
              <ProjectDday dday={3} >D-3</ProjectDday>
              <ProjectColor color="#E6D4FF"></ProjectColor>
          </ProjectDdayBox>
        </ProjectBox>
        <ProjectBox>
          <ProjectContent>멋사 데모데이</ProjectContent>
          <ProjectDdayBox>
              <ProjectDday dday={16} >D-16</ProjectDday>
              <ProjectColor color="#FFD79E"></ProjectColor>
          </ProjectDdayBox>
        </ProjectBox>
      </ProjectBigBox>
      <ProjectBigBox className='complete'>
        <ProjectTop>
          <ProjectTitle>완료된 프로젝트</ProjectTitle>
        </ProjectTop>
        <ProjectBox>
          <ProjectContent>문제해결 해커톤</ProjectContent>
          <ProjectDdayBox>
              <ProjectDate>2025.09.28</ProjectDate>
              <ProjectColor color="#AAB6FF"></ProjectColor>
          </ProjectDdayBox>
        </ProjectBox>
        <ProjectBox>
          <ProjectContent>인식개선 공모전</ProjectContent>
          <ProjectDdayBox>
              <ProjectDate>2025.09.16</ProjectDate>
              <ProjectColor color="#E6FF76"></ProjectColor>
          </ProjectDdayBox>
        </ProjectBox>
      </ProjectBigBox>
      <TapBar/>
    </Container>
  )
}

export default CompletePage

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