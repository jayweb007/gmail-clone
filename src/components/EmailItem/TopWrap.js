import React from "react";
import styled from "styled-components";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function TopWrap() {
  return (
    <Container>
      <LeftButton>
        <Checkbox color="default" />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </LeftButton>

      <RightButton>
        <Button>
          <p>1-50 of 985</p>
        </Button>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </RightButton>
    </Container>
  );
}

export default TopWrap;

const Container = styled.div`
  display: flex;
  padding: 0 0 0 10px;
  background-color: white;
`;

const LeftButton = styled.div`
  margin-right: auto;
`;

const RightButton = styled.div`
  p {
    font-size: 12px;
    text-transform: lowercase;
  }
`;
