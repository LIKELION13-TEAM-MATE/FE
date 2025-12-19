import React, { useEffect, useState } from "react";
import styled from "styled-components";
import plusimg from "../../assets/plus.png";
import trash from "../../assets/trash-outline.png";
import api from "../../lib/axios";
import Header from "../layouts/HeaderComponent";
import Nav from "../layouts/NavComponent";
import { Outlet, useParams } from "react-router-dom";

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
  // const [roles, setRoles] = useState<Role[]>([]);

  // const assignRole = async (roleId: number, memberId: number) => {
  //   await api.post(`/api/v1/projects/${projectId}/roles/${roleId}/assign`, {
  //     memberId: memberId,
  //   });
  // };

  // const unassignRole = async (roleId: number, memberId: number) => {
  //   await api.post(`/api/v1/projects/${projectId}/roles/${roleId}/unassign`, {
  //     memberId: memberId,
  //   });
  // };

  // // 역할 추가
  // const [isAdding, setIsAdding] = useState(false);
  // const [newRoleName, setNewRoleName] = useState("");

  // const createRole = async () => {
  //   if (!newRoleName.trim()) return;

  //   try {
  //     await api.post(`/api/v1/projects/${projectId}/roles`, {
  //       roleName: newRoleName,
  //     });

  //     setNewRoleName("");
  //     setIsAdding(false);
  //     fetchRoles(); // 목록 갱신
  //   } catch (error) {
  //     console.error("역할 추가 실패", error);
  //     alert("역할 추가 실패 (로그인 상태 확인)");
  //   }
  // };

  // // 역할 목록 조회 함수
  // const fetchRoles = async () => {
  //   const res = await api.get(`/api/v1/projects/${pid}/roles`);
  //   setRoles(res.data);
  // };

  // // 멤버
  // const [members, setMembers] = useState<Member[]>([]);

  // const fetchMembers = async () => {
  //   try {
  //     const res = await api.get(`/api/v1/projects/${pid}/chat-members`, {
  //       params: { requesterMemberId: 10 },
  //     });

  //     setMembers(
  //       res.data.map((m: any) => ({
  //         memberId: m.memberId,
  //         memberName: m.nickname,
  //       }))
  //     );
  //   } catch (e) {
  //     console.error("멤버 조회 실패", e);
  //   }
  // };

  // useEffect(() => {
  //   if (!pid) return;
  //   fetchRoles();
  //   fetchMembers();
  // }, [pid]);

  // const { projectId } = useParams();
  // const pid = Number(projectId);

  // useEffect(() => {
  //   api
  //     .get(`/api/v1/projects/${projectId}`)
  //     .then((res) => {
  //       setProject(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [projectId]);
  const { projectId } = useParams();
  // const pid = Number(projectId);
  const pid = Number(projectId) || 1;

  const [roles, setRoles] = useState<Role[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [project, setProject] = useState<any>(null);

  const assignRole = async (roleId: number, memberId: number) => {
    await api.post(`/api/v1/projects/${pid}/roles/${roleId}/assign`, {
      memberId,
    });
  };

  const unassignRole = async (roleId: number, memberId: number) => {
    await api.post(`/api/v1/projects/${pid}/roles/${roleId}/unassign`, {
      memberId,
    });
  };

  const [isAdding, setIsAdding] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");

  const createRole = async () => {
    if (!newRoleName.trim()) return;

    try {
      await api.post(`/api/v1/projects/${pid}/roles`, {
        roleName: newRoleName,
      });

      setNewRoleName("");
      setIsAdding(false);
      fetchRoles();
    } catch (e) {
      console.error("역할 생성 실패", e);
      alert("역할 추가 실패");
    }
  };

  const fetchRoles = async () => {
    const res = await api.get(`/api/v1/projects/${pid}/roles`);
    setRoles(res.data);
  };

  const fetchMembers = async () => {
    try {
      const res = await api.get(`/api/v1/projects/${pid}/chat-members`, {
        params: { requesterMemberId: 10 },
      });

      setMembers(
        res.data.map((m: any) => ({
          memberId: m.memberId,
          memberName: m.nickname,
        }))
      );
    } catch (e) {
      console.error("멤버 조회 실패", e);
    }
  };

  useEffect(() => {
    if (!pid) return;

    fetchRoles();
    fetchMembers();

    api.get(`/api/v1/projects/${pid}`).then((res) => {
      setProject(res.data);
    });
  }, [pid]);
  return (
    <RoleWrapper>
      <Con>
        <Header
          category={project?.category ?? ""}
          title={project?.projectName ?? ""}
          projectId={projectId}
        />

        <Nav projectId={projectId} />
      </Con>
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
  margin-top: 20px;
  width: 295px;
  min-height: 80vh;
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
const Con = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* overflow-y: auto; */
  width: 100%;
  height: auto;
  p {
    margin: 0;
    font-family: Pretendard;
  }
`;

export default RolePage;
