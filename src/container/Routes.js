import React from "react";
import { useSelector } from "react-redux";
import ChatRoom from "./chat";
import Header from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";

const Routes = () => {
  const theme = useSelector(state => state.theme)
  return (
    <div className={"cs-container " + theme}>
      <Header />
      <Sidebar />
      <ChatRoom />
    </div>
  );
};

export default Routes;
