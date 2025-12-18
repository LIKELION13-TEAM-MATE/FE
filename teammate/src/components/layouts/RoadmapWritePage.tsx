import React,{useState} from 'react'
import * as R from '../../style/RoadmapPageStyled';

function RoadmapWritePage() {
  const [isOpen, setIsOpen] = useState(false);
const [selectedStep, setSelectedStep] = useState(1);
const [deadline, setDeadline] = useState("");
  return (
    <R.WriteBody>
      <R.WriteTop>
        <R.InputSet>
          <R.InputTitle>단계 설정</R.InputTitle>
          <R.InputBox></R.InputBox>
        </R.InputSet>
        <R.InputSet>
          <R.InputTitle>제목</R.InputTitle>
          <R.InputBox>
            <R.Input type='text'></R.Input>
          </R.InputBox>
        </R.InputSet>
        <R.InputSet>
          <R.InputTitle>마감일</R.InputTitle>
          <R.InputBox>
            <R.Input type="datetime-local" min={new Date().toISOString().slice(0, 16)} value={deadline} onChange={(e) => setDeadline(e.target.value)}></R.Input>
          </R.InputBox>
        </R.InputSet>
        <R.InputSet>
          <R.InputTitle>동업자</R.InputTitle>
          <R.InputBox></R.InputBox>
        </R.InputSet>
      </R.WriteTop>
      <R.WriteBottom>
        <R.Delete>취소</R.Delete>
        <R.Create>생성</R.Create>
      </R.WriteBottom>
    </R.WriteBody>
  )
}

export default RoadmapWritePage