import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

import styled from 'styled-components'

import logo from '../../img/Logo.svg'

function SignupPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // 에러 상태
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");

    const handleSubmit = () => {
        let valid = true;
        // 비밀번호 검사
        if (password.length < 8) {
            setPasswordError("비밀번호 형식이 올바르지 않습니다.");
            valid = false;
        }
        // 비밀번호 확인
        if (password !== passwordCheck) {
            setPasswordCheckError("비밀번호가 일치하지 않습니다.");
            valid = false;
        }
        if (!valid) return;
        };
  return (
    <Container>
        <Header>
            <Logo src={logo}></Logo>
            <Description>당신의 팀에, 보이지 않는 한 명을 더</Description>
        </Header>
        <Body>
            <Input>
                <InputTitle>아이디</InputTitle>
                <InputBox placeholder="아이디를 입력하세요" type="text"></InputBox>
            </Input>
            <Input>
                <InputTitle>닉네임</InputTitle>
                <InputBox
                    placeholder="닉네임을 입력하세요"
                    type="text"
                />
            </Input>
            <Input>
                <InputTitle>비밀번호</InputTitle>
                <InputBox
                    type="password"
                    placeholder="8자 이상/숫자,특수문자 포함"
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                    }}
                />
                {passwordError && <ErrorText>{passwordError}</ErrorText>}
            </Input>
            <Input>
                <InputTitle>비밀번호 확인</InputTitle>
                <InputBox
                    type="password"
                    placeholder="비밀번호 재입력"
                    value={passwordCheck}
                    onChange={(e) => {
                    setPasswordCheck(e.target.value);
                    setPasswordCheckError("");
                    }}
                />
                {passwordCheckError && <ErrorText>{passwordCheckError}</ErrorText>}
            </Input>
            <Button onClick={handleSubmit}>시작하기</Button>
        </Body>
        <Last>
            <NoAccount>이미 계정이 있나요?</NoAccount>
            <GoSignup onClick={()=>navigate("/login")}>로그인</GoSignup>
        </Last>
    </Container>
  )
}

export default SignupPage

//Styled Components 

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    /* overflow-y: auto; */
    margin-bottom: 40px;
    width:100%;
    height: auto;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`

const Header = styled.div`
    display:flex;
    flex-direction: column;
    width: 345px;
    margin-top: 40px;
    gap: 10px;
`

const Logo = styled.img`
    width: 163px;
`

const Description = styled.p`
    color: #7A7A7A;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.72px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const InputTitle = styled.p`
    color: #7A7A7A;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.78px;
    padding-bottom: 4px;
`

const InputBox = styled.input`
    display: flex;
    width: 345px;
    padding: 16px 14px;
    align-items: center;
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid #EAEAEA;

    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.78px;

    &:focus{
        outline: 0;
        border: 1px solid #EAEAEA;
    }

    &::placeholder {
        color: #7A7A7A;
    }
`

const Button = styled.button`
    display: flex;
    width: 345px;
    padding: 16px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background:#4DAFFE;
    border: 0;
    box-sizing: border-box;
    margin-top: 14px;

    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.96px;
`

const Last = styled.div`
    display: flex;
    gap: 4px;
`

const NoAccount = styled.p`
    color: #7A7A7A;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.72px;
`

const GoSignup = styled.p`
        color:#4DAFFE;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.78px;
`

const ErrorText = styled.p`
    color:#FF383C;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.66px;
`
