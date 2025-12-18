import React from "react";
import styled from "styled-components";
import search from "../../assets/search.svg";
import circle from "../../assets/message-circle-plus.svg";
import PF from "../../assets/Ellipse2.svg";
import { Link } from "react-router-dom";
import Header from "../layouts/HeaderComponent";
import Nav from "../layouts/NavComponent";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import api from "../../lib/axios";

interface Chatroom {
  chatRoomId: number;
  name: string;
  memberCount: number;
  lastMessage: string;
  lastDisplayTime: string;
}

function ListChatroomPage() {
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);

  // const location = useLocation();
  // const params = new URLSearchParams(location.search);

  // const chatRoomId = Number(params.get("chatRoomId"));
  // const memberId = Number(params.get("memberId"));

  const projectId = 1;
  const memberId = 10; // 🔹 로그인 붙이면 제거
  // const memberId = user.id;

  useEffect(() => {
    const fetchChatrooms = async () => {
      try {
        const res = await api.get(`/api/v1/projects/${projectId}/chatrooms`, {
          params: { memberId },
        });
        setChatrooms(res.data);
      } catch (e) {
        console.error("채팅방 목록 조회 실패", e);
      }
    };

    fetchChatrooms();
  }, []);

  return (
    <ListChatroomWrapper>
      <Header></Header>
      <Nav></Nav>
      <SearchCBox>
        <SearchCR>
          <SearchInput type="text" placeholder="검색어를 입력하세요." />
          <SearchInputImg>
            <img
              src={search}
              alt="search"
              style={{ width: "18px", height: "18px" }}
            />
          </SearchInputImg>
        </SearchCR>
        <PlusCR>
          <Link to="/CreateChatroomPage">
            <img
              src={circle}
              alt="circle"
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        </PlusCR>
      </SearchCBox>
      <ChatroomListConT>
        {chatrooms.map((room) => (
          <ChatroomLink
            key={room.chatRoomId}
            to={`/ChatroomPage?chatRoomId=${room.chatRoomId}&memberId=10`}
          >
            <ChatroomListBox>
              <MemberPF>
                <img src={PF} alt="PF" />
              </MemberPF>

              <ChatroomDT>
                <TNBox>
                  <ChatroomTitle>{room.name}</ChatroomTitle>
                  <ChatroomMemberN>{room.memberCount}</ChatroomMemberN>
                </TNBox>

                <ChatroomCom>
                  {room.lastMessage ?? "메시지가 없습니다"}
                </ChatroomCom>
              </ChatroomDT>

              <ChatroomTime>{room.lastDisplayTime}</ChatroomTime>
            </ChatroomListBox>
          </ChatroomLink>
        ))}
        {/* <ChatroomLink to="/ChatroomPage">
          <ChatroomListBox>
            <MemberPF>
              <img src={PF} alt="PF" />
            </MemberPF>
            <ChatroomDT>
              <TNBox>
                <ChatroomTitle>전체 대화방</ChatroomTitle>
                <ChatroomMemberN>3</ChatroomMemberN>
              </TNBox>
              <ChatroomCom>오늘은 기획 단계 마무리합시다!</ChatroomCom>
            </ChatroomDT>
            <ChatroomTime>오전 10:11</ChatroomTime>
          </ChatroomListBox>
        </ChatroomLink>

        <ChatroomLink to="/ChatroomPage">
          <ChatroomListBox>
            <MemberPF>
              <img src={PF} alt="PF" />
            </MemberPF>
            <ChatroomDT>
              <TNBox>
                <ChatroomTitle>전체 대화방</ChatroomTitle>
                <ChatroomMemberN>3</ChatroomMemberN>
              </TNBox>
              <ChatroomCom>오늘은 기획 단계 마무리합시다!</ChatroomCom>
            </ChatroomDT>
            <ChatroomTime>오전 10:11</ChatroomTime>
          </ChatroomListBox>
        </ChatroomLink> */}
      </ChatroomListConT>
    </ListChatroomWrapper>
  );
}

const ListChatroomWrapper = styled.div`
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

// 검색
const SearchCBox = styled.div`
  padding: 20px 0 2px 0;
  display: flex;
  gap: 15px;
  align-items: center;
`;
const SearchCR = styled.div`
  display: flex;
  border: 1px solid #c7c7c7;
  border-radius: 30px;
  padding: 5px;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled.input`
  border: none;
  background-color: #f8fafc;
  width: 250px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const SearchInputImg = styled.div`
  cursor: pointer;
  padding-right: 8px;
`;
const PlusCR = styled.div`
  cursor: pointer;
`;

// 대화방
const ChatroomListConT = styled.div``;
const MemberPF = styled.div``;
const ChatroomDT = styled.div``;
const TNBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ChatroomTitle = styled.div`
  font-weight: 600;
`;
const ChatroomCom = styled.div`
  font-size: 13px;
`;
const ChatroomMemberN = styled.div`
  color: #7a7a7a;
  font-weight: 600;
`;
const ChatroomListBox = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 1px 6px rgba(198, 198, 198, 0.8);
  border-radius: 18px;
  padding: 20px;
  margin-top: 18px;
`;
const ChatroomTime = styled.div`
  font-size: 13px;
  color: #999999;
`;

const ChatroomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export default ListChatroomPage;
