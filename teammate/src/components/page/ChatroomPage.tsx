import React, { useState } from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import vector2 from "../../assets/Vector2.svg";
import menu from "../../assets/menu-outline.svg";
import { Link } from "react-router-dom";
import PF from "../../assets/Ellipse2.svg";
import Send from "../../assets/Frame.svg";
import Plus from "../../assets/Frame20.svg";

function ChatroomPage() {
  const [message, setMessage] = useState("");
  interface Message {
    text: string;
    time: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);

  // 전송함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      {
        text: message,
        time: getCurrentTime(),
      },
    ]);

    setMessage("");
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
            <STitle>멋사 데모데이</STitle>
            <CTitleBox>
              <CTitle>전체 대화방</CTitle>
              <PeopleN>3</PeopleN>
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
          <MyChatBox>
            <ChatTime>오전 9:30</ChatTime>
            <MyChat>오늘은 기획 단계 마무리합시다!</MyChat>
          </MyChatBox>
          {/* {messages.map((msg, idx) => (
            <MyChatBox key={idx}>
              <ChatTime>방금</ChatTime>
              <MyChat>{msg}</MyChat>
            </MyChatBox>
          ))} */}
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
          </OtherChatBox>
          {messages.map((msg, idx) => (
            <MyChatBox key={idx}>
              <ChatTime>{msg.time}</ChatTime>
              <MyChat>{msg.text}</MyChat>
            </MyChatBox>
          ))}
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
  flex: 1; /* ⭐ 남은 영역 전부 차지 */
  padding: 10px 23px 120px; /* ⭐ footer 높이만큼 bottom 여백 */
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
  position: fixed;
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
