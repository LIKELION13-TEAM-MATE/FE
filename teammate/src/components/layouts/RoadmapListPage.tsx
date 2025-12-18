import React,{ useState } from 'react'
import * as R from '../../style/RoadmapPageStyled';
import { useNavigate } from "react-router-dom";

import menuIcon from '../../img/ellipsis-vertical.svg';
import downBtn from '../../img/chevron-down.svg';
import commentIcon from '../../img/chat-left-text.svg';
import xIcon from '../../img/close-outline.svg';
import pencilIcon from '../../img/pencilBlack.svg';
import trashIconBlack from '../../img/trash-2.svg';

function RoadmapListPage() {
  const navigate = useNavigate();
  const progress = 80;

  const [openSteps, setOpenSteps] = useState<boolean[]>([false, false]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkedList, setCheckedList] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  

  const toggleCheck = (index: number) => {
    setCheckedList(prev =>
      prev.map((checked, i) =>
        i === index ? !checked : checked
      )
    );
  };

  const toggleOpen = (index: number) => {
    setOpenSteps(prev =>
      prev.map((open, i) =>
        i === index ? !open : open
      )
    );
  };

  return (
    <R.RoadmapContent>
      <R.RoadmapTop>
        <R.RoadmapTopLeft>
          <R.Completeness>42%</R.Completeness>
          <R.RoadmapTopContent>
            <R.Dday>D-16</R.Dday>
            <R.RemainingSteps>단계 9/99</R.RemainingSteps>
          </R.RoadmapTopContent>
        </R.RoadmapTopLeft>

        <R.StepPlusBtn onClick={() => navigate("/roadmap/write")}>
          단계 추가
        </R.StepPlusBtn>
      </R.RoadmapTop>

      <R.RoadmapStepBigBox>
        <R.RoadmapStepBox>
          <R.RoadmapStep>
            <R.StepCircle open={openSteps[0]}>1</R.StepCircle>

            <R.RoadmapStepCard>
              <R.StepCardTop>
                <R.StepCardLeft>
                  <R.StepCardLeftTop>
                    <R.StepCardTitle>기획</R.StepCardTitle>

                    <R.StepMember>
                      <R.Member>
                        <R.MemberCircle color="#E6D4FF" />
                        <R.MemberName>김채연</R.MemberName>
                      </R.Member>

                      <R.Member>
                        <R.MemberCircle color="#ADDDA3" />
                        <R.MemberName>홍길순</R.MemberName>
                      </R.Member>
                    </R.StepMember>
                  </R.StepCardLeftTop>

                  <R.StepCardLeftBottom>
                    ~ 2025.11.11.
                  </R.StepCardLeftBottom>
                </R.StepCardLeft>

                <R.StepMenu
                  src={menuIcon}
                  onClick={() => setMenuOpen(prev => !prev)}
                />

                {menuOpen && (
                  <R.Dropdown>
                    <R.DropdownItem>
                      <R.DropdownIcon src={pencilIcon} />
                      <R.DropdownContent>수정하기</R.DropdownContent>
                    </R.DropdownItem>

                    <R.DropdownItem className="line">
                      <R.DropdownIcon src={trashIconBlack} />
                      <R.DropdownContent>삭제하기</R.DropdownContent>
                    </R.DropdownItem>
                  </R.Dropdown>
                )}
              </R.StepCardTop>

              <R.StepCardBottom>
                <R.ProgressBar>
                  <R.ProgressFill percent={progress} />
                </R.ProgressBar>
                <R.Progress>{progress}%</R.Progress>
              </R.StepCardBottom>
            </R.RoadmapStepCard>

            {openSteps[0] && (
              <R.OpenBox>
                <R.CheckSet>
                  <R.CheckLeft>
                    <R.CheckLeftTop>
                      <R.CheckBox
                        checked={checkedList[0]}
                        onClick={() => toggleCheck(0)}
                      >
                        {checkedList[0] && "✓"}
                      </R.CheckBox>
                      <R.CheckTitle>주제확정</R.CheckTitle>
                    </R.CheckLeftTop>

                    <R.CheckLeftBottom>
                      팀프로젝트 관리 앱 서비스
                    </R.CheckLeftBottom>
                  </R.CheckLeft>

                  <R.CheckRight>
                    <R.CheckComment src={commentIcon} />
                    <R.CheckDelete src={xIcon} />
                  </R.CheckRight>
                </R.CheckSet>

                <R.CheckSet>
                  <R.CheckLeft>
                    <R.CheckLeftTop>
                      <R.CheckBox
                        checked={checkedList[1]}
                        onClick={() => toggleCheck(1)}
                      >
                        {checkedList[1] && "✓"}
                      </R.CheckBox>
                      <R.CheckTitle>주제확정</R.CheckTitle>
                    </R.CheckLeftTop>
                  </R.CheckLeft>

                  <R.CheckRight>
                    <R.CheckComment src={commentIcon} />
                    <R.CheckDelete src={xIcon} />
                  </R.CheckRight>
                </R.CheckSet>

                <R.CheckTaskInputBox>
                  <R.CheckTaskInput placeholder="세부 Task를 입력하세요." />
                  <R.CheckTaskBtn>등록</R.CheckTaskBtn>
                </R.CheckTaskInputBox>
              </R.OpenBox>
            )}
          </R.RoadmapStep>

          <R.OpenBtn
            src={downBtn}
            open={openSteps[0]}
            onClick={() => toggleOpen(0)}
          />
        </R.RoadmapStepBox>

        <R.RoadmapStepBox>
          <R.RoadmapStep>
            <R.StepCircle open={openSteps[1]} isLast>2</R.StepCircle>

            <R.RoadmapStepCard>
              <R.StepCardTop>
                <R.StepCardLeft>
                  <R.StepCardLeftTop>
                    <R.StepCardTitle>디자인</R.StepCardTitle>

                    <R.StepMember>
                      <R.Member>
                        <R.MemberCircle color="#E6D4FF" />
                        <R.MemberName>김채연</R.MemberName>
                      </R.Member>

                      <R.Member>
                        <R.MemberCircle color="#ADDDA3" />
                        <R.MemberName>홍길순</R.MemberName>
                      </R.Member>
                    </R.StepMember>
                  </R.StepCardLeftTop>

                  <R.StepCardLeftBottom>
                    ~ 2025.11.11.
                  </R.StepCardLeftBottom>
                </R.StepCardLeft>

                <R.StepMenu
                  src={menuIcon}
                  onClick={() => setMenuOpen(prev => !prev)}
                />

                {menuOpen && (
                  <R.Dropdown>
                    <R.DropdownItem>
                      <R.DropdownIcon src={pencilIcon} />
                      <R.DropdownContent>수정하기</R.DropdownContent>
                    </R.DropdownItem>

                    <R.DropdownItem className="line">
                      <R.DropdownIcon src={trashIconBlack} />
                      <R.DropdownContent>삭제하기</R.DropdownContent>
                    </R.DropdownItem>
                  </R.Dropdown>
                )}
              </R.StepCardTop>

              <R.StepCardBottom>
                <R.ProgressBar>
                  <R.ProgressFill percent={progress} />
                </R.ProgressBar>
                <R.Progress>{progress}%</R.Progress>
              </R.StepCardBottom>
            </R.RoadmapStepCard>

            {openSteps[1] && (
              <R.OpenBox>
                <R.CheckSet>
                  <R.CheckLeft>
                    <R.CheckLeftTop>
                      <R.CheckBox
                        checked={checkedList[0]}
                        onClick={() => toggleCheck(0)}
                      >
                        {checkedList[0] && "✓"}
                      </R.CheckBox>
                      <R.CheckTitle>주제확정</R.CheckTitle>
                    </R.CheckLeftTop>

                    <R.CheckLeftBottom>
                      팀프로젝트 관리 앱 서비스
                    </R.CheckLeftBottom>
                  </R.CheckLeft>

                  <R.CheckRight>
                    <R.CheckComment src={commentIcon} />
                    <R.CheckDelete src={xIcon} />
                  </R.CheckRight>
                </R.CheckSet>

                <R.CheckSet>
                  <R.CheckLeft>
                    <R.CheckLeftTop>
                      <R.CheckBox
                        checked={checkedList[1]}
                        onClick={() => toggleCheck(1)}
                      >
                        {checkedList[1] && "✓"}
                      </R.CheckBox>
                      <R.CheckTitle>주제확정</R.CheckTitle>
                    </R.CheckLeftTop>
                  </R.CheckLeft>

                  <R.CheckRight>
                    <R.CheckComment src={commentIcon} />
                    <R.CheckDelete src={xIcon} />
                  </R.CheckRight>
                </R.CheckSet>

                <R.CheckTaskInputBox>
                  <R.CheckTaskInput placeholder="세부 Task를 입력하세요." />
                  <R.CheckTaskBtn>등록</R.CheckTaskBtn>
                </R.CheckTaskInputBox>
              </R.OpenBox>
            )}
          </R.RoadmapStep>

          <R.OpenBtn
            src={downBtn}
            open={openSteps[1]}
            onClick={() => toggleOpen(1)}
          />
        </R.RoadmapStepBox>
      </R.RoadmapStepBigBox>
    </R.RoadmapContent>
  );
}

export default RoadmapListPage