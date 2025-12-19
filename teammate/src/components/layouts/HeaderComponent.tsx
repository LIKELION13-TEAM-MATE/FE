import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import leftIcon from "../../img/left.svg";
import inviteIcon from "../../img/circle-plus.svg";

interface HeaderProps {
  category: string;
  title: string;
  projectId?: string;
}

function HeaderComponent({ category, title, projectId }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Header>
      <LeftHeader>
        <SideClick src={leftIcon} onClick={() => navigate(-1)} />
        <HeaderContent>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </HeaderContent>
      </LeftHeader>

      <InviteBtn onClick={() => navigate(`/invite/${projectId}`)}>
        <InviteIcon src={inviteIcon} />
        <InviteContent>초대하기</InviteContent>
      </InviteBtn>
    </Header>
  );
}

export default HeaderComponent;


//Styled Components

const Header = styled.div`
  width: 345px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SideClick = styled.img``;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Category = styled.p`
  color: #999;
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

const InviteBtn = styled.button`
  width: 91px;
  height: 36px;
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  background: #efefef;
  border: none;
  cursor: pointer;
  white-space: nowrap;
`;

const InviteIcon = styled.img``;

const InviteContent = styled.p`
  color: #3c3c3c;
  font-size: 14px;
  font-weight: 600;
`;
