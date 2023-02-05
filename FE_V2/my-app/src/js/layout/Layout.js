import React from "react";
import Footer from "./Footer";
import Header from "./Header";
  

  

  
const Layout = ({children}) => {


  return (
    <>
      <Header listCategory={children.props.listCategory}/>
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;