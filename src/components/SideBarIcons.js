import React from "react";
import styled from "styled-components";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

function SideBarIcons() {
  return (
    <Container>
      <Wrap>
        <IconButton>
          <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" />
        </IconButton>
        <IconButton>
          <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" />
        </IconButton>
        <IconButton>
          <img src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" />
        </IconButton>
        <IconButton>
          <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" />
        </IconButton>
        <hr />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Wrap>
      <Nav>
        <IconButton>
          <NavigateNextIcon />
        </IconButton>
      </Nav>
    </Container>
  );
}

export default SideBarIcons;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto max-content;
  border-left: 1px solid lightgrey;
  background-color: blanchedalmond;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 60px) 5px 50px;
  place-items: center;
  /* padding-bottom: 50px; */
  /* margin-bottom: auto; */

  img {
    width: 100%;
    max-height: 22px;
    object-fit: contain;
  }

  hr {
    width: 20px;
  }
`;

const Nav = styled.div`
  position: absolute;
  bottom: 0;
  background-color: blanchedalmond;
`;
