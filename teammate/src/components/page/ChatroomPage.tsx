import React, { useState } from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import vector2 from "../../assets/Vector2.svg";
import menu from "../../assets/menu-outline.svg";
import { Link } from "react-router-dom";
import PF from "../../assets/Ellipse2.svg";
import Send from "../../assets/Frame.svg";
import Plus from "../../assets/Frame20.svg";
import api from "../../lib/axios";
import { useLocation } from "react-router-dom";

const chatRoomId = 100; // 실제 채팅방 id
const senderMemberId = 10;
const memberId = senderMemberId;
const roomPassword = "1234"; // 비번 없는 방이면 "" 또는 undefined

function ChatroomPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const chatRoomId = Number(params.get("chatRoomId"));
  const memberId = Number(params.get("memberId")); // 🔹 로그인 붙이면 제거
  const roomName = params.get("name") ?? "";
  const memberCount = Number(params.get("memberCount")) || 0;

  const [message, setMessage] = useState("");
  interface ApiMessage {
    messageId: number;
    senderId: number;
    senderNickname: string;
    content: string;
    createdAt: string;
  }

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get(`/api/v1/chatrooms/${chatRoomId}/messages`, {
          params: {
            memberId: senderMemberId,
            roomPassword,
          },
        });

        // 서버 메시지를 기존 Message 타입으로 변환
        const converted = res.data.map((msg: any) => ({
          text: msg.content,
          time: formatTime(msg.createdAt),
        }));

        setMessages(res.data);
      } catch (e) {
        console.error("메시지 조회 실패", e);
      }
    };

    fetchMessages();
  }, []);

  const [messages, setMessages] = useState<ApiMessage[]>([]);

  // 전송함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await api.post(
        `/api/v1/chatrooms/${chatRoomId}/messages`,
        {
          content: message,
          roomPassword,
        },
        {
          params: {
            senderMemberId,
          },
        }
      );

      // 전송 성공 시 화면에 바로 추가
      // setMessages((prev) => [
      //   ...prev,
      //   {
      //     text: message,
      //     time: getCurrentTime(),
      //   },
      // ]);

      // 서버 기준으로 다시 조회 (정합성 맞추기)
      const res = await api.get(`/api/v1/chatrooms/${chatRoomId}/messages`, {
        params: {
          memberId: senderMemberId,
          roomPassword,
        },
      });

      const converted = res.data.map((msg: any) => ({
        text: msg.content,
        time: formatTime(msg.createdAt),
      }));

      setMessages(converted);

      setMessage("");
    } catch (error) {
      console.error("메시지 전송 실패", error);
      alert("메시지 전송 실패");
    }
  };

  //하단 스크롤
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //메시지 전송 시간
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours < 12 ? "오전" : "오후";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${ampm} ${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  const formatTime = (createdAt: string) => {
    const date = new Date(createdAt);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours < 12 ? "오전" : "오후";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${ampm} ${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <ChatroomPageWrepper>
      <ChatroomCon>
        <ChatroomHeader>
          <Link to="/ListChatroomPage">
            <img
              src={vector2}
              alt="vector2"
              style={{ width: "23px", height: "23px" }}
            />
          </Link>
          <TiTle>
            <STitle>{roomName}</STitle>
            <CTitleBox>
              <CTitle>전체 대화방</CTitle>
              <PeopleN>{memberCount}</PeopleN>
            </CTitleBox>
          </TiTle>
          <CahtMenu>
            <img
              src={menu}
              alt="menu"
              style={{ width: "18px", height: "18px" }}
            />
          </CahtMenu>
        </ChatroomHeader>
        <ChatroomBody>
          <ChatDay>2025년 12월 12일</ChatDay>
          {messages.map((msg) =>
            msg.senderId === memberId ? (
              // 내 메시지
              <MyChatBox key={msg.messageId}>
                <ChatTime>{formatTime(msg.createdAt)}</ChatTime>
                <MyChat>{msg.content}</MyChat>
              </MyChatBox>
            ) : (
              // 상대 메시지
              <OtherChatBox key={msg.messageId}>
                <OtherPF>
                  <img
                    src={PF}
                    alt="PF"
                    style={{ width: "27px", height: "27px" }}
                  />
                </OtherPF>
                <ChatBoxTime>
                  <OtherCaht>{msg.content}</OtherCaht>
                  <ChatTime>{formatTime(msg.createdAt)}</ChatTime>
                </ChatBoxTime>
              </OtherChatBox>
            )
          )}
          {/* <MyChatBox>
            <ChatTime>오전 9:30</ChatTime>
            <MyChat>오늘은 기획 단계 마무리합시다!</MyChat>
          </MyChatBox>

          <OtherChatBox>
            <OtherPF>
              <img
                src={PF}
                alt="PF"
                style={{ width: "27px", height: "27px" }}
              />
            </OtherPF>
            <ChatBoxTime>
              <OtherCaht>
                좋아요! 오늘까지 3페이지 완성할게요! 로드맵에 등록해두겠습니다.
              </OtherCaht>
              <ChatTime>오전 9:30</ChatTime>
            </ChatBoxTime>
          </OtherChatBox> */}
          {/* {messages.map((msg, idx) => (
            <MyChatBox key={idx}>
              <ChatTime>{msg.time}</ChatTime>
              <MyChat>{msg.text}</MyChat>
            </MyChatBox>
          ))} */}
          <div ref={bottomRef} />
        </ChatroomBody>
        <ChatroomFooter as="form" onSubmit={handleSubmit}>
          <Plusbtn>
            <img
              src={Plus}
              alt="plus"
              style={{ width: "30px", height: "30px" }}
            />
          </Plusbtn>
          <InputTxtBox>
            <InputTxt
              type="text"
              placeholder="메시지를 입력하세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></InputTxt>
          </InputTxtBox>
          <Sendbtn type="submit">
            <img
              src={Send}
              alt="send"
              style={{ width: "30px", height: "30px" }}
            />
          </Sendbtn>
        </ChatroomFooter>
      </ChatroomCon>
    </ChatroomPageWrepper>
  );
}

const ChatroomPageWrepper = styled.div``;

// 채팅방
const ChatroomCon = styled.div`
  height: 100vh;
  flex-direction: column;
  display: flex;
`;
const ChatroomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  padding: 23px;

  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  padding: 23px;
`;

const TiTle = styled.div`
  text-align: center;
`;
const STitle = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  padding-right: 4px;
`;
const CTitleBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const PeopleN = styled.div`
  color: #7a7a7a;
  font-weight: 600;
  font-size: 14px;
`;
const CahtMenu = styled.div`
  cursor: pointer;
`;
const CTitle = styled.div`
  font-weight: 600;
`;

// 채팅
const ChatroomBody = styled.div`
  padding: 10px 23px 23px 23px;
  flex: 1;
  padding: 10px 23px 120px;
  overflow-y: auto;
`;
const ChatDay = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 540;
  color: #7a7a7a;
  margin-bottom: 20px;
`;

const MyChatBox = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px 0 10px 0;
  gap: 8px;
  align-items: flex-end;
`;
const MyChat = styled.div`
  padding: 17px 20px 20px 17px;
  background-color: #4daffe;
  color: #ffff;
  border-radius: 30px 0 30px 30px;
  font-size: 13px;
`;
const ChatTime = styled.div`
  text-align: justify;
  font-size: 10px;
  color: #999999;
`;

const OtherChatBox = styled.div`
  display: flex;
  margin: 20px 0 10px 0;
  gap: 8px;
  align-items: flex-end;
`;
const OtherPF = styled.div``;
const OtherCaht = styled.div`
  padding: 20px;
  background-color: #eeeeee;
  color: #656565;
  border-radius: 30px 30px 30px 0px;
  font-size: 13px;
  font-weight: 540;
`;

const ChatBoxTime = styled.div`
  margin-bottom: 14px;
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

// footer
const ChatroomFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ffff;
  height: 100px;
  padding-bottom: 10px;
  /* position: fixed; */
  bottom: 0;
  width: 393px;
`;
const Plusbtn = styled.div``;
const InputTxtBox = styled.div`
  width: 273px;
  background-color: #eeeeee;
  padding: 5px;
  border-radius: 30px;
`;
const InputTxt = styled.input`
  width: 240px;
  padding-left: 8px;
  background-color: #eeeeee;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const Sendbtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default ChatroomPage;
