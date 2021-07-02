import React from "react";
import styled from "styled-components";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import { sideButtonItems } from "./data/SideButtonItems";
import { bottomButtonItems } from "./data/BottomButton";
import { openSendMessage } from "../features/sendSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../features/userSlice";

function SideBar() {
  const dispatch = useDispatch();
  const show = useSelector(selectedUser);

  return (
    <Container>
      <TopSection>
        <ComposeWrap onClick={() => dispatch(openSendMessage())}>
          <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />
          <p>Compose</p>
        </ComposeWrap>
        <SideButtonsWrap>
          {sideButtonItems.map((item, index) => (
            <SideBarButtons key={index}>
              {item.icons} {item.text}
            </SideBarButtons>
          ))}
        </SideButtonsWrap>
      </TopSection>

      <BottomSection>
        <MeetWrap>
          <Title>Meet</Title>
          <p>
            <VideocamIcon /> New Meeting
          </p>
          <p>
            <KeyboardIcon /> Join a meeting
          </p>
        </MeetWrap>

        <HangoutWrap>
          <Titlee>Hangouts</Titlee>
          <Group>
            <p>
              <AccountCircleIcon />
              {show?.displayName} <ArrowDropDownIcon />
            </p>
            <span>
              <IconButton>
                <AddIcon />
              </IconButton>
            </span>
          </Group>
        </HangoutWrap>

        <BottomButtons>
          {bottomButtonItems.map((item, index) => (
            <BottomIcons key={index}>{item.icon}</BottomIcons>
          ))}
        </BottomButtons>
      </BottomSection>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  position: relative;
  background-color: white;
`;

const TopSection = styled.div``;

const ComposeWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 10px;
  margin: 15px 100px 8px 8px;
  cursor: pointer;
  border-radius: 40px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  img {
    padding: 0 15px 0 0;
  }
  &:hover {
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
  }
`;

const BottomSection = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 260px;
`;

const SideButtonsWrap = styled.div``;

const SideBarButtons = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 18% auto;
  height: 30px;
  align-items: center;
  padding: 0 0 0 18px;
  color: #202124;
  border-radius: 0 100px 100px 0;

  &:hover {
    background-color: #fce8e6;
    color: #c04b37;
    font-weight: 700;

    .MuiSvgIcon-root {
      color: #c04b37;
    }
  }
  .MuiSvgIcon-root {
    color: grey;
  }
`;

const MeetWrap = styled.div`
  border-top: 2px solid lightgrey;
  p {
    display: grid;
    grid-template-columns: 18% auto;
    height: 30px;
    align-items: center;
    padding: 0 0 0 18px;
    cursor: pointer;
    color: #202124;

    &:hover {
      background-color: #f3f4f6;
      /* background-color: #f5f7f7; */
      border-radius: 0 100px 100px 0;
    }

    .MuiSvgIcon-root {
      color: #5f6368;
    }
  }
`;

const Title = styled.div`
  padding: 10px 0 10px 18px;
`;
const Titlee = styled.div`
  padding: 10px 0 10px 18px;
`;

const HangoutWrap = styled.div`
  border-top: 1px solid lightgrey;
  padding-bottom: 45%;
`;

const Group = styled.div`
  /* display: grid;
  grid-template-columns: 85% auto;
  align-items: center; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 0 0 0 18px;
  /* justify-content: space-between; */
  p {
    display: flex;
    cursor: pointer;
    color: #202124;
    /* margin-right: 111px; */
    height: 30px;
    place-items: center;
    margin-right: auto;

    .MuiSvgIcon-root {
      color: #5f6368;
    }
  }

  span {
    color: #202124;
  }
`;

const BottomButtons = styled.div`
  grid-gap: 12px;
  border-top: 1px solid lightgrey;
  display: flex;
  place-content: center;
  padding-top: 7px;
`;

const BottomIcons = styled.div`
  cursor: pointer;

  .MuiSvgIcon-root {
    color: #5f6368;
  }
`;
