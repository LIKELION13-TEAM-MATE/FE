import React from 'react'
import * as B from '../../style/BoardPageStyled';
import { Outlet } from "react-router-dom";

import Header from "../../components/layouts/HeaderComponent";
import Nav from "../../components/layouts/NavComponent";

function BoardPage() {
  return (
    <B.container>
        <Header/>
        <Nav/>
        <Outlet />
        
    </B.container>
  )
}

export default BoardPage