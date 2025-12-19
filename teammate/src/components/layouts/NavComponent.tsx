import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavProps {
  projectId?: string;
}

function NavComponent({ projectId }: NavProps) {

  return (
    <NavWrapper>
      <StyledLink to={`/board/${projectId}`}>
        <NavBtn>게시판</NavBtn>
      </StyledLink>
      <StyledLink to="/RolePage">
        <NavBtn>역할</NavBtn>
      </StyledLink>
      <StyledLink to="/SchedulePage">
        <NavBtn>일정</NavBtn>
      </StyledLink>

      <StyledLink to={`/roadmap/${projectId}`}>
        <NavBtn>로드맵</NavBtn>
      </StyledLink>
      <StyledLink to="/ListChatroomPage">
        <NavBtn>대화방</NavBtn>
      </StyledLink>
    </NavWrapper>
  );
}

export default NavComponent;


//Styled Components

const NavWrapper = styled.div`
  width: 345px;
  height: 40px;
  background: #d7e7f4;
  padding: 4.5px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  width: 63.6px;
  height: 100%;
  text-decoration: none;

  &.active div {
    background: #fff;
  }
`;

const NavBtn = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
