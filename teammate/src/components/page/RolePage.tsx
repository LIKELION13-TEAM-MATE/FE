import React from "react";
import styled from "styled-components";
import plusimg from "../../assets/plus.png";
import trash from "../../assets/trash-outline.png";

function RolePage() {
  return (
    <RoleWrapper>
      {/* 공동 헤더 컴포넌트 추가 */}
      <ScheduleContainer>
        <AddContainer>
            <AddBox>
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
          <AddBoxBtn>
          <AddBox>
            <img src={plusimg} alt="plusimg" style={{ width:'12px', height:'12px' }} />
            <AddBtn>직접 추가하기</AddBtn>
          </AddBox>
          </AddBoxBtn>
        </AddContainer>
            <NameContainer>
            <NameList>김채연</NameList>
            <NameList>홍길동</NameList>
            <NameList>홍길순</NameList>
          </NameContainer>
          <TrashImgBox>
          <img src={trash} alt="trash" style={{ width:'35px', height:'35px' }}/>
          </TrashImgBox>
      </ScheduleContainer>
    </RoleWrapper>
  );  

}

const RoleWrapper = styled.div`
  background-color: #F8FAFC;
`;

const ScheduleContainer = styled.div`
  width: 295px;
  height: 613px;
  min-height: 90vh;
  /* margin: 25px; */
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 6px rgba(198, 198, 198, 0.8);
  padding: 23px;

  position: relative;
`;

const AddContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #F0F0F0;
  display: flex;
  gap:20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, auto));

`;
const AddBox = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #F4F4F4;
  border-radius: 7px;
  /* width: 128px; */
  height: 38px;
  gap: 8px;
  padding: 3px 8px 3px 8px;
`;

const AddBtn = styled.div`
  font-size:14px;
  font-weight: 500;
`;
const AddBoxBtn = styled.div`
display: block`;

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