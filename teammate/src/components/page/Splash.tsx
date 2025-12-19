import React from 'react'
import styled from 'styled-components'

import logo from '../../img/Logo.svg'

function Splash() {
  return (
    <Wapper>
        <Logo src={logo}></Logo>
    </Wapper>
  )
}

//style component

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
const Logo = styled.img`
    
`

export default Splash