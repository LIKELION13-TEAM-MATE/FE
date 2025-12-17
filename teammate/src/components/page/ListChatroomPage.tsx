import React from "react";
import styled from "styled-components";
import search from "../../assets/search.svg";
import circle from "../../assets/message-circle-plus.svg";
import PF from "../../assets/Ellipse2.svg";

function ListChatroomPage() {
  return (
    <ListChatroomWrapper>
      {/* 공동컴포넌트 추가 */}
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
          <img
            src={circle}
            alt="circle"
            style={{ width: "20px", height: "20px" }}
          />
        </PlusCR>
      </SearchCBox>
      <ChatroomListConT>
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
      </ChatroomListConT>
    </ListChatroomWrapper>
  );
}

const ListChatroomWrapper = styled.div``;

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

export default ListChatroomPage;
