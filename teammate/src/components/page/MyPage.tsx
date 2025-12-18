import React from "react";
import styled from "styled-components";
import myPF from "../../assets/Profile-Picture.svg";

function MyPage() {
  return (
    <MyWrapper>
      <MyHd>
        <HdTitle>마이페이지</HdTitle>
      </MyHd>
      <MyBox>
        <MyPFBox>
          <MyPF>
            <img
              src={myPF}
              alt="myPF"
              style={{ width: "45px", height: "45px" }}
            />
          </MyPF>
          <MySubBox>
            <MYWelcome>
              <MyTxt>안녕하세요,</MyTxt>
              <MyName>김채연</MyName>
              <MyTxt>님!</MyTxt>
            </MYWelcome>
            <MySubT>진행 중인 프로젝트 진행도</MySubT>
            <RBox>
              <RBarBox>
                <Bar></Bar>
              </RBarBox>
              <RPer>80%</RPer>
            </RBox>
          </MySubBox>
        </MyPFBox>
        <MyToDoBox>
          <TotoTitle>나의 할 일</TotoTitle>
          <ToDoBox>
            <MyCheList>
              <CheCon>
                <MyCheckbox type="checkbox" /> 기획서 작성
                <CheSubBox>
                  <ChSub>멋사 데모데이</ChSub>
                </CheSubBox>
              </CheCon>
              <CheCon>
                <MyCheckbox type="checkbox" /> 올리브영 SWOT 분석
                <CheSubBox>
                  <ChSub>경영 교양 팀플</ChSub>
                </CheSubBox>
              </CheCon>
              <CheCon>
                <MyCheckbox type="checkbox" /> 대본 작성
                <CheSubBox>
                  <ChSub>경영 교양 팀플</ChSub>
                </CheSubBox>
              </CheCon>
            </MyCheList>
            <MyDDay>D-1</MyDDay>
          </ToDoBox>
        </MyToDoBox>
      </MyBox>
    </MyWrapper>
  );
}

const MyWrapper = styled.div``;

const MyBox = styled.div``;

const MyHd = styled.div`
  padding: 35px 0 20px 0;
`;
const HdTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const MyPFBox = styled.div`
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  background-color: #e2effa;
  display: flex;
  gap: 20px;
  align-items: center;
`;
const MyPF = styled.div``;
const MySubBox = styled.div``;
const MYWelcome = styled.div`
  display: flex;
  gap: 3px;
`;
const MyTxt = styled.div``;
const MyName = styled.div`
  font-weight: 600;
`;
const MySubT = styled.div`
  margin-top: 5px;
  font-size: 12.5px;
`;

const RBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const RBarBox = styled.div`
  width: 200px;
  height: 6px;
  background-color: #e0e6f8;
  border-radius: 40px;
`;
const Bar = styled.div`
  width: 180px;
  height: 6px;
  border-radius: 40px;
  background: linear-gradient(90deg, #117ed5 0%, #4daffe 50%, #a1d2f9 100%);
`;
const RPer = styled.div`
  color: #4daffe;
  font-size: 13px;
  font-weight: 600;
`;

// 나의할일
const MyToDoBox = styled.div`
  margin-top: 20px;
`;
const TotoTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const ToDoBox = styled.div`
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  background-color: #ffff;
  box-shadow: 0px -1px 6px rgba(198, 198, 198, 0.6);

  display: flex;
  gap: 20px;
  align-items: center;
`;
const MyCheList = styled.div`
  font-size: 15px;
`;
const CheCon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const MyCheckbox = styled.input.attrs({ type: "checkbox" })``;
const CheSubBox = styled.div`
  font-size: 9px;
  font-weight: 550;
  color: #4daffe;
`;
const ChSub = styled.div`
  margin-left: 5px;
  background-color: #d7e7f4;
  padding: 3px 4px;
  border-radius: 20px;
`;
const MyDDay = styled.div``;

export default MyPage;
