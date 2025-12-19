import React, { useEffect, useState } from 'react';
import * as R from '../../style/RoadmapPageStyled';
import { useNavigate, useParams } from "react-router-dom";
import api from '../../lib/axios';

import menuIcon from '../../img/ellipsis-vertical.svg';
import downBtn from '../../img/chevron-down.svg';
import commentIcon from '../../img/chat-left-text.svg';
import xIcon from '../../img/close-outline.svg';
import pencilIcon from '../../img/pencilBlack.svg';
import trashIconBlack from '../../img/trash-2.svg';

function RoadmapListPage() {
  const navigate = useNavigate();
  const { projectId } = useParams(); 

  const [roadmap, setRoadmap] = useState<any | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openStep, setOpenStep] = useState(false);

  interface Member {
  memberId?: number;
  username?: string;
  nickname?: string;
}


  useEffect(() => {
  if (!projectId) return;

  api.get(`/api/v1/roadmap/roadmaps/${projectId}`)
    .then(res => {
      console.log("🔥 실제 응답:", res.data);
      setRoadmap(res.data);
    })
    .catch(err => {
      console.error("로드맵 조회 실패:", err);
      console.log("🔥 서버 응답 전체:", err.response?.data);
      console.log("🔥 상태코드:", err.response?.status);
      console.log("🔥 에러 메시지:", err.response);
    });
}, [projectId]);


  if (!roadmap) {
  return <div>로드맵 불러오는 중...</div>;
}

const tasks = Array.isArray(roadmap.tasks) ? roadmap.tasks : [];
const members = Array.isArray(roadmap.members) ? roadmap.members : [];


  return (
    <R.RoadmapContent>
      <R.RoadmapTop>
        <R.RoadmapTopLeft>
          <R.Completeness>{roadmap.progress}%</R.Completeness>

          <R.RoadmapTopContent>
            <R.Dday>D-16</R.Dday>
            <R.RemainingSteps>단계 {tasks.length}</R.RemainingSteps>
          </R.RoadmapTopContent>
        </R.RoadmapTopLeft>

        <R.StepPlusBtn onClick={() => navigate(`/roadmap/${projectId}/write`)}>
          단계 추가
        </R.StepPlusBtn>
      </R.RoadmapTop>


      {/* ⭐ 반복 렌더링: 로드맵의 모든 step */}
      <R.RoadmapStepBigBox>
        {tasks.map((step: any, idx: number) => (
          <R.RoadmapStepBox key={step.id}>
            <R.RoadmapStep>

              <R.StepCircle open={openStep}>
                {idx + 1}
              </R.StepCircle>

              <R.RoadmapStepCard>
                <R.StepCardTop>
                  <R.StepCardLeft>

                    <R.StepCardLeftTop>
                      <R.StepCardTitle>{step.title ?? ""}</R.StepCardTitle>

                      {/* 멤버 리스트 출력 */}
                      <R.StepMember>
                        {members.map((m: Member) => (
                          <R.Member key={m.memberId ?? m.username}>
                            <R.MemberCircle color="#E6D4FF" />
                            <R.MemberName>{m.nickname ?? m.username}</R.MemberName>
                          </R.Member>
                        ))}
                      </R.StepMember>
                    </R.StepCardLeftTop>

                    <R.StepCardLeftBottom>
                      ~ {roadmap.deadline}
                    </R.StepCardLeftBottom>

                  </R.StepCardLeft>

                  <R.StepMenu src={menuIcon} onClick={() => setMenuOpen(prev => !prev)} />

                  {menuOpen && (
                    <R.Dropdown>
                      <R.DropdownItem>
                        <R.DropdownIcon src={pencilIcon} />
                        <R.DropdownContent>수정하기</R.DropdownContent>
                      </R.DropdownItem>

                      <R.DropdownItem className="line">
                        <R.DropdownIcon src={trashIconBlack} />
                        <R.DropdownContent>삭제하기</R.DropdownContent>
                      </R.DropdownItem>
                    </R.Dropdown>
                  )}
                </R.StepCardTop>

                {/* 진행률 */}
                <R.StepCardBottom>
                  <R.ProgressBar>
                    <R.ProgressFill percent={roadmap.progress} />
                  </R.ProgressBar>
                  <R.Progress>{roadmap.progress}%</R.Progress>
                </R.StepCardBottom>

              </R.RoadmapStepCard>

              {/* step 펼치기 */}
              {openStep && (
                <R.OpenBox>
                  {tasks.map((task: any, idx: number) => (
                      <R.CheckSet key={task.id}>
                        <R.CheckLeft>
                          <R.CheckLeftTop>
                            <R.CheckBox checked={task.checked}>
                              {task.checked && "✓"}
                            </R.CheckBox>
                            <R.CheckTitle>{task.title}</R.CheckTitle>
                          </R.CheckLeftTop>

                          <R.CheckLeftBottom>{task.content}</R.CheckLeftBottom>
                        </R.CheckLeft>

                    <R.CheckRight>
                      <R.CheckComment src={commentIcon} />
                      <R.CheckDelete src={xIcon} />
                    </R.CheckRight>
                  </R.CheckSet>
                    ))}
                </R.OpenBox>
              )}

            </R.RoadmapStep>

            <R.OpenBtn
              src={downBtn}
              open={openStep}
              onClick={() => setOpenStep(prev => !prev)}
            />

          </R.RoadmapStepBox>
        ))}
      </R.RoadmapStepBigBox>
    </R.RoadmapContent>
  );
}

export default RoadmapListPage;