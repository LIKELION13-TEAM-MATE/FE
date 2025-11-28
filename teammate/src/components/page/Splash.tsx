import React from 'react'
import styled from 'styled-components'

function Splash() {
  return (
    <Wapper>
        <Logo>TEAM</Logo>
        <LogoBlue>.</LogoBlue>
        <Logo>MATE</Logo>
    </Wapper>
  )
}

const Wapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-family: Pretendard;
    }
`
const Logo = styled.p`
    font-weight: bold;
    font-size: 48px;
    letter-spacing: 0.06em;
`

const LogoBlue = styled.p`
    font-weight: bold;
    font-size: 48px;
    color: #4DAFFE;
    letter-spacing: 0.06em;
`

export default Splash