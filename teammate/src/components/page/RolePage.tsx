import React, { useEffect, useState } from "react";
import styled from "styled-components";
import plusimg from "../../assets/plus.png";
import trash from "../../assets/trash-outline.png";
import api from "../../lib/axios";

// 역할 타입, 상태 추가
interface Role {
  id: number;
  roleName: string;
}

interface Member {
  memberId: number;
  memberName: string;
}

function RolePage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const projectId = 1; //나중에 params로 변경

  const assignRole = async (roleId: number, memberId: number) => {
    await api.post(`/api/v1/projects/${projectId}/roles/${roleId}/assign`, {
      memberId: memberId,
    });
  };

  const unassignRole = async (roleId: number, memberId: number) => {
    await api.post(`/api/v1/projects/${projectId}/roles/${roleId}/unassign`, {
      memberId: memberId,
    });
  };

  // 역할 추가
  const [isAdding, setIsAdding] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");

  const createRole = async () => {
    if (!newRoleName.trim()) return;

    try {
      await api.post(`/api/v1/projects/${projectId}/roles`, {
        roleName: newRoleName,
      });

      setNewRoleName("");
      setIsAdding(false);
      fetchRoles(); // 목록 갱신
    } catch (error) {
      console.error("역할 추가 실패", error);
      alert("역할 추가 실패 (로그인 상태 확인)");
    }
  };

  // 역할 목록 조회 함수
  const fetchRoles = async () => {
    const res = await api.get(`/api/v1/projects/${projectId}/roles`);
    setRoles(res.data);
  };

  // 멤버
  const [members, setMembers] = useState<Member[]>([]);

  const fetchMembers = async () => {
    const res = await api.get(`/api/v1/projects/${projectId}/members`);
    setMembers(res.data);
  };

  useEffect(() => {
    fetchRoles();
    fetchMembers();
  }, []);

  return (
    <RoleWrapper>
      {/* 공동 헤더 컴포넌트 추가 */}
      <RoleContainer>
        <AddContainer>
          {roles.map((role) => (
            <AddBox key={role.id}>
              <AddBtn>{role.roleName}</AddBtn>
            </AddBox>
          ))}

          {isAdding ? (
            <AddBox>
              <input
                value={newRoleName}
                onChange={(e) => setNewRoleName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    createRole();
                  }
                }}
                placeholder="역할 이름"
                autoFocus
                style={{
                  width: "60px",
                  border: "none",
                  backgroundColor: "#99999",
                }}
              />
            </AddBox>
          ) : (
            <AddBox onClick={() => setIsAdding(true)}>
              <img src={plusimg} />
              <AddBtn>직접 추가하기</AddBtn>
            </AddBox>
          )}

          {/* <AddBox>
            <AddBtn>기획</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>디자인</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>프론트엔드</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>백엔드</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>인터뷰 준비</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>인터뷰어</AddBtn>
          </AddBox>
          <AddBox>
            <AddBtn>PPT 제작</AddBtn>
          </AddBox>
          <AddBoxBtn> */}
          {/* <AddBox>
              <img
                src={plusimg}
                alt="plusimg"
                style={{ width: "12px", height: "12px" }}
              />
              <AddBtn>직접 추가하기</AddBtn>
            </AddBox> */}
          {/* <AddBox> */}
          {/* <img
                src={plusimg}
                alt="plusimg"
                style={{ width: "12px", height: "12px" }}
              />
              <AddBtn>직접 추가하기</AddBtn>
            </AddBox>
          </AddBoxBtn> */}
        </AddContainer>
        <NameContainer>
          {members.map((member) => (
            <NameList key={member.memberId}>{member.memberName}</NameList>
          ))}
          {/* <NameList>김채연</NameList>
          <NameList>홍길동</NameList>
          <NameList>홍길순</NameList> */}
        </NameContainer>
        <TrashImgBox>
          <img
            src={trash}
            alt="trash"
            style={{ width: "35px", height: "35px" }}
          />
        </TrashImgBox>
      </RoleContainer>
    </RoleWrapper>
  );
}

const RoleWrapper = styled.div`
  background-color: #f8fafc;
`;

const RoleContainer = styled.div`
  width: 295px;
  height: 613px;
  min-height: 90vh;
  /* margin: 25px; */
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 1px 6px rgba(198, 198, 198, 0.8);
  padding: 23px;

  position: relative;
`;

const AddContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, auto));
`;
const AddBox = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f4f4f4;
  border-radius: 7px;
  /* width: 128px; */
  height: 38px;
  gap: 8px;
  padding: 3px 8px 3px 8px;
`;

const AddBtn = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
const AddBoxBtn = styled.div`
  display: block;
`;

//이름별 역할
const NameContainer = styled.div`
  margin: 20px 0 20px 0;
`;
const NameList = styled.div`
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
`;

const TrashImgBox = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

//추가

export default RolePage;
