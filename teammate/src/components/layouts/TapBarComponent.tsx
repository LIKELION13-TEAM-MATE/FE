import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import homeIcon from "../../img/Homeicon.svg";
import homeIconColor from "../../img/HomeiconColor.svg";
import calendarIcon from "../../img/calendarIcon.svg";
import calendarIconColor from "../../img/calendarIconColor.svg";
import plusIcon from "../../img/Plusicon.svg";
import folderIcon from "../../img/folderIcon.svg";
import folderIconColor from "../../img/folderIconColor.svg";

function TapBarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  return (
    <Container>
      <Icon
        src={currentPath === "/" ? homeIconColor : homeIcon}
        onClick={() => navigate("/")}
      />
      <Icon
        src={
          currentPath === "/MySchedulePage" ? calendarIconColor : calendarIcon
        }
        onClick={() => navigate("/MySchedulePage")}
      />
      <Icon src={plusIcon} onClick={() => navigate("/new")} />
      <Icon
        src={currentPath === "/complete" ? folderIconColor : folderIcon}
        onClick={() => navigate("/complete")}
      />
      <Circle onClick={() => navigate("/mypage")} />
    </Container>
  );
}

export default TapBarComponent;

//styleComponent

const Container = styled.div`
  width: 393px;
  height: 81px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding-top: 14px;
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #4daffe;
  border: 1px solid #3e8ccb;
`;
