import React from "react";
import Layout from "./HOC/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <Layout>
      <Header />
      <>{children}</>
      <Footer />
    </Layout>
  );
}

export default App;
