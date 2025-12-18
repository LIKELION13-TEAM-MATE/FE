import React,{useState} from 'react'
import * as R from '../../style/RoadmapPageStyled';

function RoadmapWritePage() {
  const [isOpen, setIsOpen] = useState(false);
const [selectedStep, setSelectedStep] = useState(1);
const [deadline, setDeadline] = useState("");

const [step, setStep] = useState<number | "">("");
const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

// 예시용 멤버 (API 연결 전 mock)
const members = [
  { id: 1, nickname: "홍길동" },
  { id: 2, nickname: "김멋사" },
  { id: 3, nickname: "최솔" },
];

const [membersOpen, setMembersOpen] = useState(false);

const toggleMember = (id: number) => {
  if (selectedMembers.includes(id)) {
    setSelectedMembers(selectedMembers.filter(m => m !== id));
  } else {
    setSelectedMembers([...selectedMembers, id]);
  }
};

  return (
    <R.WriteBody>
      <R.WriteTop>
        <R.InputSet>
          <R.InputTitle>단계 설정</R.InputTitle>
          <R.StepWrapper>
           <R.StepSelectWrapper>
            <R.StepSelect
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            >
              <option value="">단계를 선택하세요</option>
              {Array.from({ length: 10 }).map((_, idx) => (
                <option key={idx + 1} value={idx + 1}>
                  {idx + 1}단계
                </option>
              ))}
            </R.StepSelect>

            <R.StepArrow />
          </R.StepSelectWrapper>
          </R.StepWrapper>
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
          <R.MemberWrapper>

            <R.MemberSelectBox onClick={() => setMembersOpen(prev => !prev)}>
              {selectedMembers.length === 0 ? (
                <R.MemberPlaceholder>선택하세요</R.MemberPlaceholder>
              ) : (
                <R.MemberSelectedText>{selectedMembers.length}명 선택됨</R.MemberSelectedText>
              )}
            </R.MemberSelectBox>

            {membersOpen && (
              <R.MemberDropdown>
                {members.map(m => (
                  <R.MemberItem
                    key={m.id}
                    onClick={() => toggleMember(m.id)}
                  >
                    <R.CheckCircle selected={selectedMembers.includes(m.id)} />
                    <R.WriteMemberName>{m.nickname}</R.WriteMemberName>
                  </R.MemberItem>
                ))}
              </R.MemberDropdown>
            )}
          </R.MemberWrapper>
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