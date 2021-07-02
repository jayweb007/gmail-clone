import React from "react";
import SideBar from "./SideBar";
import EmailView from "./EmailView";
import MailDetail from "./MailDetail";
import SideBarIcons from "./SideBarIcons";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Main() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  return (
    <Router>
      <Container>
        {!user && history.push("/")}
        <Switch>
          <Route path="/inbox">
            <SideBar />
            <EmailView />
            <SideBarIcons />
          </Route>

          <Route path="/detail">
            <SideBar />
            <MailDetail />
            <SideBarIcons />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Main;

const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto 50px;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
`;
