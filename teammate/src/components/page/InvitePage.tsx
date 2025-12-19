import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import api from "../../lib/axios";

import Header from "../../components/layouts/HeaderComponent";

interface Member {
  membershipId: number;    // m.id
  username: string;        // m.nickname OR m.username
  color: string;           // m.avatarColor
}

function InvitePage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);

  const [members, setMembers] = useState<Member[]>([]);
  const [inviteName, setInviteName] = useState("");

  // ---------------------------
  // 프로젝트 정보 조회
  // ---------------------------
  useEffect(() => {
    if (!projectId) return;

    api
      .get(`/api/v1/projects/${projectId}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error("프로젝트 조회 실패:", err));
  }, [projectId]);

  // ---------------------------
  // 팀원 목록 조회 (추측입니다)
  // 실제 엔드포인트 & 필드는 스웨거 보고 맞춰서 수정
  // ---------------------------
  const fetchMembers = async () => {
    if (!projectId) return;

    try {
      const res = await api.get(`/api/v1/projects/${projectId}/team/members`);
      console.log("팀원 목록:", res.data);

      const mapped: Member[] = res.data.map((m: any) => ({
        membershipId: m.id,
        username: m.nickname ?? m.username,
        color: m.avatarColor ?? "#D7E6DD",
      }));

      setMembers(mapped);
    } catch (err) {
      console.error("팀원 목록 조회 실패:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  // ---------------------------
  // 팀원 초대
  // ---------------------------
  const handleInvite = async () => {
    if (!inviteName.trim() || !projectId) return;

    try {
      const res = await api.post(
        `/api/v1/projects/${projectId}/team/invite`,
        {
          username: inviteName.trim(), // 스웨거 기준
        }
      );

      console.log("초대 성공:", res.data);
      alert(res.data.message ?? "팀원을 성공적으로 초대했습니다!");

      setInviteName("");
      await fetchMembers(); // 서버 데이터 기준으로 새로고침
    } catch (err: any) {
      console.error("초대 실패:", err);
      const msg = err?.response?.data?.message ?? "초대에 실패했습니다.";
      alert(msg);
    }
  };

  // ---------------------------
  // 팀원 강퇴
  // ---------------------------
  const handleKick = async (membershipId: number) => {
    if (!projectId) return;

    const ok = window.confirm("해당 팀원을 프로젝트에서 제거하시겠습니까?");
    if (!ok) return;

    try {
      const res = await api.post(
        `/api/v1/projects/${projectId}/team/kick/${membershipId}`
      );
      console.log("강퇴 성공:", res.data);
      alert(res.data.message ?? "팀원을 성공적으로 강퇴했습니다.");

      await fetchMembers();
    } catch (err: any) {
      console.error("강퇴 실패:", err);
      const msg = err?.response?.data?.message ?? "강퇴에 실패했습니다.";
      alert(msg);
    }
  };

  const [myNickname, setMyNickname] = useState("");
  useEffect(() => {
    api.get("/api/v1/users/me")
      .then(res => {
        setMyNickname(res.data.nickname);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      {/* 프로젝트 제목/카테고리 동적 표시 */}
      <Header
        projectId={projectId}
        category={project?.category ?? "프로젝트"}
        title={project?.projectName ?? ""}
      />

      <Body>
        <InviteBox>
          <InviteInput
            value={inviteName}
            onChange={(e) => setInviteName(e.target.value)}
            placeholder="초대할 팀원 ID"
          />
          <InviteBtn onClick={handleInvite}>초대</InviteBtn>
        </InviteBox>

        <MemberBox>
          {/* TODO: 리더 정보도 백엔드에서 받아오게 되면 여기도 동적으로 바꾸기 */}
          <Me>
            <RuleBox>리더</RuleBox>
              <MyName>{myNickname}</MyName>
            <ItsMe>(나)</ItsMe>
          </Me>

          <OtherMember>
            {members.map((member) => (
              <MemberRow key={member.membershipId}>
                <MemberLeft>
                  <ColorCircle color={member.color} />
                  <MemberName>{member.username}</MemberName>
                </MemberLeft>
                <Out onClick={() => handleKick(member.membershipId)}>탈퇴</Out>
              </MemberRow>
            ))}
          </OtherMember>
        </MemberBox>
      </Body>
    </Container>
  );
}

export default InvitePage;

// =======================
// Styled Components
// =======================

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
  height: auto;

  p {
    margin: 0;
    font-family: Pretendard;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InviteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InviteInput = styled.input`
  display: flex;
  width: 278px;
  padding: 16px;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.2);

  &:focus {
    border: none;
    outline: 0;
  }

  &::placeholder {
    color: #999;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
`;

const InviteBtn = styled.button`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  background: #4daffe;
  box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.2);
  border: none;

  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Me = styled.div`
  display: flex;
  gap: 4px;
`;

const RuleBox = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #d7e6dd;
  box-sizing: border-box;

  color: #2a533c;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

const MyName = styled.p`
  color: #21272a;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

const ItsMe = styled.p`
  color: #7a7a7a;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

const OtherMember = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #cacaca;
  width: 345px;
  padding: 16px 10px;
  box-sizing: border-box;
  gap: 16px;
`;

const MemberRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ColorCircle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const MemberLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MemberName = styled.p`
  color: #21272a;
  font-size: 14px;
  font-weight: 600;
`;

const Out = styled.p`
  color: #999;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
`;
