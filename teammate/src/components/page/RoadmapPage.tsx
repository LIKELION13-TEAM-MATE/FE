import React from 'react'
import * as R from '../../style/RoadmapPageStyled';
import { Outlet } from "react-router-dom";

import Header from "../../components/layouts/HeaderComponent";
import Nav from "../../components/layouts/NavComponent";

function RoadmapPage() {
  return (
    <R.container>
      <Header></Header>
      <Nav></Nav>
      <Outlet/>
    </R.container>
  )
}

export default RoadmapPage