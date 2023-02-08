import React from "react";
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import * as S from 'src/theme/Styled';

const DashboardLayout = (props) => {
  return (
    <Page className="main-layout">
      <Sidebar />
      <PageContent className="px-3 py-2">
        <Navbar />
        {props.children}
      </PageContent>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  min-height: 100vh;
`
const PageContent = styled.div`
  flex: 1;
`

export default DashboardLayout;