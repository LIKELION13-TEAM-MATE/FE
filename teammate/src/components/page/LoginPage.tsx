import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import api from '../../lib/axios';


import logo from '../../img/Logo.svg'

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    console.log("입력값:", username, password);

    try {
        const res = await api.post("api/v1/members/login", {
        username: username,
        password: password,
        });

        console.log("응답:", res.data);

        navigate("/main");
    } catch (err: any) {
        console.error("에러:", err.response?.status, err.response?.data);
    }
    };
  return (
    <Container>
        <Header>
            <Logo src={logo}></Logo>
            <Description>당신의 팀에, 보이지 않는 한 명을 더</Description>
        </Header>
        <Body>
            <InputBox placeholder="아이디" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></InputBox>
            <InputBox placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></InputBox>
            <Button onClick={handleLogin}>로그인</Button>
        </Body>
        <Last>
            <NoAccount>아직 계정이 없나요?</NoAccount>
            <GoSignup onClick={()=>navigate("/signup")}>회원가입</GoSignup>
        </Last>
    </Container>
  )
}

export default LoginPage

//Styled Components 

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
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
