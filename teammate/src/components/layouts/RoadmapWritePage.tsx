import React, { useState, useEffect } from 'react';
import * as R from '../../style/RoadmapPageStyled';
import { useNavigate, useParams } from "react-router-dom";
import api from '../../lib/axios';

function RoadmapWritePage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  // 입력값
  const [step, setStep] = useState<number | "">("");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [membersOpen, setMembersOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  // 실제 프로젝트 멤버 (백엔드에서 받아옴)
  const [members, setMembers] = useState<{ memberId: number; nickname: string }[]>([]);

  const toggleMember = (id: number) => {
  setSelectedMembers(prev =>
    prev.includes(id)
      ? prev.filter(m => m !== id)
      : [...prev, id]
  );
};

  // -----------------------------
  // ⭐ 프로젝트 멤버 불러오기
  // -----------------------------
  useEffect(() => {
  if (!projectId) return;

  api.get(`/api/v1/projects/${projectId}`)
    .then(res => {
      const data = res.data;

      let fetchedMembers: any[] = [];

      if (Array.isArray(data.members)) {
        fetchedMembers = data.members.map((m: any) => ({
          memberId: m.memberId ?? m.id,
          nickname: m.nickname ?? m.username
        }));
      }

      // ⭐ 너(본인) 정보 추가
      const myName = localStorage.getItem("username");
      const myId = Number(localStorage.getItem("userId"));

      if (myId && myName) {
        // 중복 방지 후 push
        const exists = fetchedMembers.some(m => m.memberId === myId);

        if (!exists) {
          fetchedMembers.push({
            memberId: myId,
            nickname: myName,
          });
        }
      }

      setMembers(fetchedMembers);
    })
    .catch(err => {
      console.error("멤버 조회 실패:", err);
    });
}, [projectId]);

  // -----------------------------
  // ⭐ 로드맵 생성 API
  // -----------------------------
  const handleCreate = () => {
    if (!projectId) {
      alert("프로젝트 ID가 존재하지 않습니다.");
      return;
    }

    if (!title || !step || !deadline) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // deadline 포맷 변환 (datetime-local → yyyy-MM-dd)
    const formattedDeadline = deadline.split("T")[0];

    const body = {
      title,
      step,
      deadline: formattedDeadline,
      memberIds: selectedMembers
    };
    

    api.post(`/api/v1/roadmap/projects/${projectId}/roadmaps`, body)
      .then(res => {
        alert("로드맵이 생성되었습니다.");

        // 새로 생성된 roadmapId 응답 문자열 안에 있음
        const createdId = res.data.match(/\d+/)?.[0];

        if (createdId) {
          navigate(`/roadmap/${createdId}`);
        } else {
          navigate(`/roadmap/${projectId}`);
        }
      })
      .catch(err => {
        console.error("로드맵 생성 실패:", err);
        alert("로드맵 생성에 실패했습니다.");
      });
  };


  return (
    <R.WriteBody>
      <R.WriteTop>

        {/* 단계 */}
        <R.InputSet>
          <R.InputTitle>단계 설정</R.InputTitle>
          <R.StepWrapper>
            <R.StepSelectWrapper>
              <R.StepSelect
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
              >
                <option value="">단계를 선택하세요</option>
                {Array.from({ length: 20 }).map((_, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {idx + 1}단계
                  </option>
                ))}
              </R.StepSelect>
              <R.StepArrow />
            </R.StepSelectWrapper>
          </R.StepWrapper>
        </R.InputSet>

        {/* 제목 */}
        <R.InputSet>
          <R.InputTitle>제목</R.InputTitle>
          <R.InputBox>
            <R.Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </R.InputBox>
        </R.InputSet>

        {/* 마감일 */}
        <R.InputSet>
          <R.InputTitle>마감일</R.InputTitle>
          <R.InputBox>
            <R.Input
              type="datetime-local"
              value={deadline}
              min={new Date().toISOString().slice(0, 16)}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </R.InputBox>
        </R.InputSet>

        {/* 동업자 */}
        <R.InputSet>
          <R.InputTitle>동업자</R.InputTitle>
          <R.MemberWrapper>

            <R.MemberSelectBox onClick={() => setMembersOpen(prev => !prev)}>
              {selectedMembers.length === 0 ? (
                <R.MemberPlaceholder>선택하세요</R.MemberPlaceholder>
              ) : (
                <R.MemberSelectedText>{selectedMembers.length}명 선택됨</R.MemberSelectedText>
              )}
            </R.MemberSelectBox>

            {membersOpen && (
              <R.MemberDropdown>
                {members.map(m => (
                  <R.MemberItem key={m.memberId} onClick={() => toggleMember(m.memberId)}>
                    <R.CheckCircle selected={selectedMembers.includes(m.memberId)} />
                    <R.WriteMemberName>{m.nickname}</R.WriteMemberName>
                  </R.MemberItem>
                ))}
              </R.MemberDropdown>
            )}
          </R.MemberWrapper>
        </R.InputSet>
      </R.WriteTop>

      {/* 버튼 */}
      <R.WriteBottom>
        <R.Delete onClick={() => navigate(`/roadmap/${projectId}`)}>취소</R.Delete>
        <R.Create onClick={handleCreate}>생성</R.Create>
      </R.WriteBottom>
    </R.WriteBody>
  );
}

export default RoadmapWritePage;
