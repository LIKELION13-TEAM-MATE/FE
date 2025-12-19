import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Stroke from "../../assets/Stroke.svg";
import Header from "../layouts/HeaderComponent";
import Nav from "../layouts/NavComponent";
import api from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PEOPLE_LIST = [
  { id: 2, name: "홍길동" },
  { id: 3, name: "홍길순" },
  { id: 7, name: "김철수" },
];

function CreateChatroomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [people, setPeople] = useState<{ id: number; name: string }[]>([]);

  const navigate = useNavigate();

  const [selectedPeople, setSelectedPeople] = useState<number[]>([]);
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");

  const togglePerson = (id: number) => {
    setSelectedPeople((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // const fetchMembers = async () => {
  //   try {
  //     const res = await api.get(`/api/v1/projects/1/chat-members`, {
  //       withCredentials: true,
  //     });

  //     const members = res.data.map((m: any) => ({
  //       id: m.memberId,
  //       name: m.nickname,
  //     }));

  //     setPeople(members);
  //   } catch (error) {
  //     console.error("멤버 조회 실패", error);
  //   }
  // };

  const fetchMembers = async () => {
    try {
      const res = await api.get(`/api/v1/projects/1/chat-members`, {
        params: { requesterMemberId: 10 },
      });

      const members = res.data.map((m: any) => ({
        id: m.memberId,
        name: m.nickname,
      }));

      setPeople(members);
    } catch (error) {
      console.error("멤버 조회 실패", error);
    }
  };

  const createChatRoom = async () => {
    if (!roomName.trim()) {
      alert("방 이름을 입력하세요!");
      return;
    }

    if (selectedPeople.length === 0) {
      alert("대화 상대를 1명 이상 선택하세요!");
      return;
    }

    try {
      await api.post(`/api/v1/projects/1/chatrooms`, {
        name: roomName,
        inviteMemberIds: selectedPeople,
        password,
      });

      alert("채팅방 생성 완료");
      navigate("/ListChatroomPage");
    } catch (error: any) {
      console.error(error.response?.data || error);
      alert("채팅방 생성 실패");
    }
  };

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     try {
  //       const res = await api.get("/api/v1/projects/1/members", {
  //         withCredentials: true,
  //       });

  //       // 👉 백엔드 응답 형식에 맞게 수정
  //       const list = res.data.members.map((m: any) => ({
  //         id: m.memberId,
  //         name: m.name,
  //       }));

  //       setPeople(list);
  //     } catch (err) {
  //       console.error("멤버 조회 실패", err);
  //     }
  //   };

  //   fetchMembers();
  // }, []);

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <CreateChatroomWrapper>
      <Header></Header>
      <Nav></Nav>
      <CreateContainer>
        <CreateElementForm>
          <CreatePeopleBox>
            <PeopleTxt> 대화상대 선택</PeopleTxt>
            <PeopleSelectBox onClick={() => setIsOpen(!isOpen)}>
              {selectedPeople.length > 0
                ? people
                    .filter((p) => selectedPeople.includes(p.id))
                    .map((p) => p.name)
                    .join(", ")
                : "대화상대를 선택하세요"}

              <Arrow>
                <img src={Stroke} alt="Stoke" />
              </Arrow>
            </PeopleSelectBox>

            {isOpen && (
              <Dropdown>
                {people.map((person) => (
                  <DropdownItem key={person.id}>
                    <input
                      type="checkbox"
                      checked={selectedPeople.includes(person.id)}
                      onChange={() => togglePerson(person.id)}
                    />
                    <span>{person.name}</span>
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
          </CreatePeopleBox>
          <CreateTitleBox>
            <CreateTiTxt> 대화방 이름</CreateTiTxt>
            <CreateTitle
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              type="text"
            ></CreateTitle>
          </CreateTitleBox>
          <CreatePasBox>
            <CreatePasTxt> 비밀번호</CreatePasTxt>
            <CreatePassword
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></CreatePassword>
          </CreatePasBox>
        </CreateElementForm>
        <SelectBoxCt>
          <SelectBox>
            <Link to="/ListChatroomPage">
              <DelBtn type="button">취소</DelBtn>
            </Link>
            <CreateBtn type="button" onClick={createChatRoom}>
              생성
            </CreateBtn>
          </SelectBox>
        </SelectBoxCt>
      </CreateContainer>
    </CreateChatroomWrapper>
  );
}

const CreateChatroomWrapper = styled.div`
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

const CreateContainer = styled.div`
  margin-top: 30px;
  width: 295px;
  height: 500px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 1px 6px rgba(198, 198, 198, 0.8);
  padding: 23px;
  position: relative;
`;

const CreateElementForm = styled.form``;

// 상대선택
const CreatePeopleBox = styled.div`
  position: relative;
`;
const PeopleTxt = styled.div`
  color: #999999;
  font-size: 12px;
`;
// const PeopleLable = styled.select``;
const PeopleSelectBox = styled.div`
  border: 1px solid #eeeeee;
  margin-top: 7px;
  border-radius: 5px;
  padding: 8px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Arrow = styled.span`
  font-size: 12px;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 105%;
  width: 100%;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 8px 0;
  z-index: 10;
`;
const DropdownItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

// 이름
const CreateTitleBox = styled.div`
  margin-top: 20px;
`;
const CreateTiTxt = styled.div`
  color: #999999;
  font-size: 12px;
`;
const CreateTitle = styled.input`
  border: 1px solid #eeeeee;
  margin-top: 7px;
  border-radius: 5px;
  padding: 8px;
  font-size: 13px;
  cursor: pointer;
  width: 277px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

// 비번
const CreatePasBox = styled.div`
  margin-top: 20px;
`;
const CreatePasTxt = styled.div`
  color: #999999;
  font-size: 12px;
`;
const CreatePassword = styled.input`
  border: 1px solid #eeeeee;
  margin-top: 7px;
  border-radius: 5px;
  padding: 8px;
  font-size: 13px;
  cursor: pointer;
  width: 277px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

// 선택박스
const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DelBtn = styled.button`
  background-color: #ffff;
  border: none;
  font-size: 15px;
  color: #55718a;
  font-weight: 600;
  cursor: pointer;
`;
const CreateBtn = styled.button`
  background-color: #4daffe;
  border: none;
  padding: 8px 13px 8px 13px;
  border-radius: 5px;
  font-size: 15px;
  color: #ffff;
  font-weight: 600;
  cursor: pointer;
`;

const SelectBoxCt = styled.div`
  position: absolute;
  bottom: 23px;
  left: 23px;
  right: 23px;
`;

export default CreateChatroomPage;
