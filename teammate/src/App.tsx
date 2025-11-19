import React from 'react';
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes, Outlet } from 'react-router-dom';


// 페이지 이 밑으로 쭉 정리해주세요.
import MainPage from './components/page/MainPage';

//페이지 외 요소들은 이 밑으로 정리해주세요.


//틀 다 짜뒀어요. 
//app.tsx랑 index.tsx 부분은 잘못 건들면 레이아웃이 다 무너져서 조심히 다뤄주세요..
function MainLayout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  )
}

function App() {
  return (
    <WebShell>
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout />}>
        
          <Route path="/" element={<MainPage />}></Route>
      
        </Route>
      </Routes>
    </WebShell>
  );
}

const WebShell = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; 
  background-color: #F8FAFC;
`

export default App;