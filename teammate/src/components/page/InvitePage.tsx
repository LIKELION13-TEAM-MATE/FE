import React,{useState} from 'react'
import styled from "styled-components"

import Header from "../../components/layouts/HeaderComponent";

function InvitePage() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "홍길동",
      color: "#FFD4E9",
    },
    {
      id: 2,
      name: "홍길순",
      color: "#E6D4FF",
    },
  ]);

  const [inviteName, setInviteName] = useState("");
  const handleInvite = () => {
      if (!inviteName.trim()) return;

      const newMember = {
        id: Date.now(), // 더미용 고유값
        name: inviteName,
        color: "#D7E6DD", // 임의 색
      };

      setMembers(prev => [...prev, newMember]);
      setInviteName("");
    };

    const handleKick = (memberId: number) => {
      setMembers(prev =>
        prev.filter(member => member.id !== memberId)
      );
    };

  return (
    <Container>
      <Header/>
      <Body>
        <InviteBox>
          <InviteInput value={inviteName}
          onChange={(e) => setInviteName(e.target.value)}
          placeholder="초대할 팀원 ID"></InviteInput>
          <InviteBtn onClick={handleInvite}>초대</InviteBtn>
        </InviteBox>
        <MemberBox>
          <Me>
            <RuleBox>리더</RuleBox>
            <MyName>김채연</MyName>
            <ItsMe>(나)</ItsMe>
          </Me>
          <OtherMember>
            {members.map(member => (
              <Member key={member.id}>
                <MemberLeft>
                  <ColorCircle color={member.color} />
                  <MemberName>{member.name}</MemberName>
                </MemberLeft>
                <Out onClick={() => handleKick(member.id)}>탈퇴</Out>
              </Member>
            ))}
          </OtherMember>
        </MemberBox>
      </Body>
    </Container>
  )
}

export default InvitePage

//Styled Components 

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    /* overflow-y: auto; */
    margin-bottom: 40px;
    width:100%;
    height: auto;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InviteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const InviteInput = styled.input`
  display: flex;
  width: 278px;
  padding: 16px;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);

  &:focus{
    border: none;
    outline: 0;
  }

  &::placeholder{
    color:#999;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; 
  }
`

const InviteBtn = styled.button`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  background: #4DAFFE;
  box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.20);
  border: none;

  color: #FFF;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Me = styled.div`
  display: flex;
  gap: 4px;
`

const RuleBox = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #D7E6DD;
  box-sizing: border-box;

  color: #2A533C;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.4px;
`

const MyName = styled.p`
  color:#21272A;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px; 
`

const ItsMe = styled.p`
  color:#7A7A7A;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px; 
`

const OtherMember = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #CACACA;
  width: 345px;
  padding: 16px 10px;
  box-sizing: border-box;
  gap: 16px;
`

const Member = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ColorCircle = styled.div<{ color: string; }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const MemberLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const MemberName = styled.p`
  color:#21272A;
  font-size: 14px;
  font-weight: 600;
`

const Out = styled.p`
  color:#999;
  font-size: 10px;
  font-weight: 500;
`