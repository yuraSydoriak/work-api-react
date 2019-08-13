import React from "react";
import Layout from "./HOC/Layout";
import Footer from "./components/Footer";
import HeaderContainer from "./containers/HeaderContainer";
import styled from "styled-components";

const Content = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

function App({ children }) {
  return (
    <Layout>
      <HeaderContainer />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}

export default App;
