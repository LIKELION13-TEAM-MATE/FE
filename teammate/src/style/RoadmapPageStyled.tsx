import styled from "styled-components";

export const container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    /* overflow-y: auto; */
    width:100%;
    height: auto;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`;

//List 부분 스타일

export const RoadmapContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
`

export const RoadmapTop = styled.div`
    display: flex;
    width: 345px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
    box-sizing: border-box;
`

export const RoadmapTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Completeness = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
    padding: 10px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #D7E7F4;
    box-sizing: border-box;

    color: #008DFF;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
`

export const RoadmapTopContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Dday = styled.p`
    color: #000;
    font-size: 22px;
    font-weight: 600;
`

export const RemainingSteps = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.28px;
`

export const StepPlusBtn = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid rgba(227, 231, 234, 0.80);
    background-color: #fff;

    color: #24669A;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
`

export const RoadmapStepBigBox = styled.div`
    width: 345px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const RoadmapStepBox = styled.div`
    width: 345px;
    display: flex;
    position: relative;
    padding-bottom: 10px;
    flex-direction: column;
`

export const RoadmapStep = styled.div`
    display: flex;
    position: relative;
    width: 345px;
    flex-direction: column;
    align-items: flex-end;
`

export const StepCircle = styled.div<{ isLast?: boolean; open: boolean; }>`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #D7E7F4;
    border: 2px solid #F8FAFC;
    z-index: 15;

    position: absolute;
    top: 0;
    left: 0;

    color: #24669A;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
/* 
     &::after {
    content: "";
    position: absolute;
    top: 24px;          
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: ${({ open }) => (open ? "290px" : "110px")};
    background: #E0E6ED;

    display: ${({ isLast }) => (isLast ? "none" : "block")};
  }
   */
`

export const RoadmapStepCard = styled.div`
display: flex;
flex-direction: column;
width: 329px;
padding: 16px 16px 14px 16px;
box-sizing: border-box;
border-radius: 16px;
background: #FFF;
box-shadow: 0 1px 6px 0 rgba(221, 221, 221, 0.25);
margin-top: 12px;
gap: 8px;
z-index: 10;
`

export const StepCardTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const StepCardLeft = styled.div`

`

export const StepCardLeftTop = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

export const StepCardLeftBottom = styled.p`
color: #6E6E6E;
font-size: 12px;
font-weight: 500;
`

export const StepMenu = styled.img`
`

export const StepCardTitle = styled.p`
    color: #000;
    font-size: 18px;
    font-weight: 600;
`

export const StepMember = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

export const Member = styled.div`
display: flex;
align-items: center;
gap: 2px;
`

export const MemberCircle = styled.div<{color:string}>`
    background-color: ${(props) => props.color};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

export const MemberName = styled.p`
    color: #3C3C3C;
    font-size: 10px;
    font-weight: 500;
`

export const StepCardBottom = styled.div`
display: flex;
gap: 3px;
align-items: center;
`

export const ProgressBar = styled.div`
width: 272px;
height: 6px;
border-radius: 3px;
background: #EDF2F8;
`

export const ProgressFill = styled.div<{ percent: number }>`
height: 100%;
  width: ${({ percent }) => percent}%;
  background: linear-gradient(90deg, #117ED5 0%, #4DAFFE 50%, #A1D2F9 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
`

export const Progress = styled.p`
color:#7A7A7A;
font-size: 10px;
font-weight: 600;
`

export const OpenBtn = styled.img<{ open: boolean }>`
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 15;
    top: 90px;
    left: 50%;
    transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
`

export const OpenBox = styled.div`
display: flex;
position: relative;
top:-16px;
z-index: 1;
width: 329px;
padding:36px 16px 20px 16px;
box-sizing: border-box;
flex-direction: column;
border-radius: 0 0 16px 16px;
background: #FCFDFE;
box-shadow: 0 1px 6px 0 rgba(198, 198, 198, 0.20);
gap: 16px;
`

export const CheckSet = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const CheckLeft = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

export const CheckLeftTop = styled.div`
display: flex;
gap: 8px;
align-items: center;
`

export const CheckLeftBottom = styled.div`
color: #3C3C3C;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
text-decoration-style: dotted;
text-decoration-skip-ink: auto;
text-decoration-thickness: 12%; /* 1.44px */
text-underline-offset: 22%; /* 2.64px */
text-underline-position: from-font;

padding-left: 22.6px;
`

export const CheckBox = styled.div<{ checked: boolean }>`
width: 13px;
height: 13px;
border-radius: 2px;
border: 0.8px solid #3C3C3C;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;

font-size: 9px;
font-weight: 700;
color: white;

background-color: ${({ checked }) =>
checked ? "#4DAFFE" : "transparent"};

border-color: ${({ checked }) =>
checked ? "#4DAFFE" : "#3c3c3c"};

cursor: pointer;
`

export const CheckTitle = styled.p`
color:#21272A;
font-size: 14px;
font-weight: 500;
`

export const CheckRight = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const CheckComment = styled.img`

`

export const CheckDelete = styled.img`

`

export const CheckTaskInputBox = styled.div`
display: flex;
align-items: center;
gap: 6px;
width: 100%;
margin-top: 4px;
`

export const CheckTaskInput = styled.input`
display: flex;
width: 245px;
padding: 11px 12px;
align-items: center;
border-radius: 6px;
border: 0.5px solid #E1E1E1;
box-sizing: border-box;

font-family: Pretendard;
font-size: 10px;
font-weight: 500;

&::placeholder{
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 500;
    color: #C7C7C7;
}

&:focus{
    border: 0.5px solid #E1E1E1;
    outline: none;
}
`

export const CheckTaskBtn = styled.button`
display: flex;
padding: 10px 12px;
align-items: center;
justify-content: center;
box-sizing: border-box;
border-radius: 6px;
background: rgba(77, 175, 254, 0.90);
border: none;
white-space: nowrap;

color: #FFF;
font-family: Pretendard;
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0.72px;
`

export const Dropdown = styled.div`
    width: 100px;
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 30px 84px 0 rgba(19, 10, 46, 0.08), 
                0 8px 32px 0 rgba(19, 10, 46, 0.07), 
                0 3px 14px 0 rgba(19, 10, 46, 0.03), 
                0 1px 3px 0 rgba(19, 10, 46, 0.13);
    position: absolute;
    right: 5%;
    top:60%;
    background-color: #fff;
`

export const DropdownItem = styled.div`
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    display: flex;
    gap: 6px;

    &.line{
        border-top: 1px solid #EEE;
    }
`

export const DropdownIcon = styled.img`

`

export const DropdownContent = styled.p`
    color:#21272A;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
`


//write 부분 스타일

export const WriteBody = styled.div`
display: flex;
width: 345px;
height: 562px;
padding: 30px 20px;
box-sizing: border-box;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 16px;
background: #FFF;
box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
`

export const WriteTop = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
`

export const WriteBottom = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Delete = styled.p`
color: #55718A;
font-size: 16px;
font-weight: 700;
line-height: 26px; /* 162.5% */
letter-spacing: 0.96px;
`

export const Create = styled.div`
display: flex;
padding: 6px 12px;
align-items: center;
justify-content: center;
box-sizing: border-box;
border-radius: 8px;
background: #4DAFFE;

color: #FFF;

font-family: Pretendard;
font-size: 16px;
font-weight: 700;
line-height: 26px; /* 162.5% */
letter-spacing: 0.96px;
`

export const InputSet = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

export const InputTitle = styled.p`
color:#999;
font-size: 12px;
font-weight: 500;
`

export const InputBox = styled.div`
display: flex;
padding: 10px 12px;
height: 37px;
box-sizing: border-box;
width: 100%;
justify-content: space-between;
align-items: center;
border-radius: 6px;
border: 1px solid #EEE;
background: #FFF;
color: #21272A;
font-family: 'Pretendard';
font-size: 16px;
font-weight: 500;
`

export const Input = styled.input`
    align-items: center;
    width: 100%;
    border: none;

    color: #21272A;
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;

    &:focus{
        outline: 0;
        border: 0;
    }
`

/* 단계 드롭다운 */
export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StepSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StepSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px 36px 10px 12px;  /* 오른쪽에 아이콘 들어갈 공간 확보 */
  border-radius: 6px;
  border: 1px solid #EEE;
  background: #FFF;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  color: #21272A;

  appearance: none;         /* 기본 화살표 제거 */
  -webkit-appearance: none; /* 사파리 */
  -moz-appearance: none;    /* 파이어폭스 */

  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4DAFFE;
  }
`;

/* 오른쪽 V 아이콘 */
export const StepArrow = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #777;

  pointer-events: none; /* 클릭 방해 안 하게 */
`;


/* 동업자 드롭다운 */
export const MemberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;


export const MemberSelectBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #EEE;
  background: #FFF;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

export const MemberPlaceholder = styled.p`
  color: #999;
  font-size: 14px;
  font-weight: 500;
`;

export const MemberSelectedText = styled.p`
  color: #21272A;
  font-size: 14px;
  font-weight: 600;
`;

export const MemberDropdown = styled.div`
  position: absolute;
  top: 45px;
  width: 100%;
  background: #FFF;
  border: 1px solid #EEE;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  padding: 8px 0;
  z-index: 100;
`;

export const MemberItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #F3F9FF;
  }
`;

export const WriteMemberName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const CheckCircle = styled.div<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? "#4DAFFE" : "#CCC")};
  background: ${({ selected }) => (selected ? "#4DAFFE" : "transparent")};
`;