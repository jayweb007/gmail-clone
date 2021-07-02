import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser, userLogout } from "../features/userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const show = useSelector(selectedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut().then(dispatch(userLogout()));

    history.push("/");
  };

  return (
    <Wrap>
      {!user && history.push("/")}
      <LogoWrap>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
      </LogoWrap>

      <SearchWrap>
        <SearchBarWrap>
          <IconButton>
            <SearchIconn />
          </IconButton>

          <input type="text" placeholder="Search Mail" />

          <IconButton>
            <TuneIconn />
          </IconButton>
        </SearchBarWrap>
      </SearchWrap>

      <IconWrap>
        <IconButton size="small">
          <HelpOutlineIcon />
        </IconButton>
        <IconButton size="small">
          <SettingsIcon />
        </IconButton>
        <IconButton size="small">
          <AppsIcon />
        </IconButton>
        <IconButton onClick={signOut} size="small">
          <Avatar src={show?.photo} fontSize="inherit" />
        </IconButton>
      </IconWrap>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 260px auto 200px;
  height: 70px;
  border-bottom: 1px solid lightgrey;
  background-color: blanchedalmond;
  align-items: center;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const LogoWrap = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  place-items: center;
  margin: 0 auto 0 8px;

  img {
    cursor: pointer;
    margin-left: 8px;
  }
`;

const SearchWrap = styled.div``;

const SearchBarWrap = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;
  place-items: center;
  height: 53px;
  width: 100%;
  max-width: 730px;
  min-width: 330px;
  background-color: whitesmoke;
  border-radius: 10px;

  /* .MuiButtonBase-root {
    width: 1.5em;
    height: 1.5em;
  } */
  input {
    width: 100%;
    height: 30px;
    background: transparent;
    border: none;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
`;
const SearchIconn = styled(SearchIcon)``;

const TuneIconn = styled(TuneIcon)``;

const IconWrap = styled.div`
  display: grid;
  grid-template-columns: 46px 46px 46px 46px;
  padding-left: auto;

  .MuiSvgIcon-root {
    color: #5f6368;
  }
  /* .MuiButtonBase-root {
    width: 1.5em;
    height: 1.5em;
  } */
`;
