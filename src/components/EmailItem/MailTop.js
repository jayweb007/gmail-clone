import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FolderIcon from "@material-ui/icons/Folder";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";

function MailTop() {
  const history = useHistory();

  return (
    <Container>
      <LeftButton>
        <IconButton onClick={() => history.push("/inbox")}>
          <ArrowBackIcon color="default" />
        </IconButton>
        <IconButton>
          <ArchiveIcon />
        </IconButton>
        <IconButton>
          <ErrorIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon color="default" />
        </IconButton>
        <IconButton>
          <MailIcon />
        </IconButton>
        <IconButton>
          <WatchLaterIcon />
        </IconButton>
        <IconButton>
          <CheckCircleIcon color="default" />
        </IconButton>
        <IconButton>
          <FolderIcon />
        </IconButton>
        <IconButton>
          <LabelIcon />
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

export default MailTop;

const Container = styled.div`
  display: flex;
  padding: 0 0 0 10px;
`;

const LeftButton = styled.div`
  margin-right: auto;
  min-width: 500px;
`;

const RightButton = styled.div`
  min-width: 178px;
  p {
    font-size: 12px;
    text-transform: lowercase;
  }
`;
