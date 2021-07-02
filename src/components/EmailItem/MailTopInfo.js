import React from "react";
import styled from "styled-components";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import PrintIcon from "@material-ui/icons/Print";
import LaunchIcon from "@material-ui/icons/Launch";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function MailTopInfo({ label, subject, to }) {
  const history = useHistory();

  return (
    <Container>
      <PrimWrap>
        <p>{subject}</p>
        <IconButton>
          {label ? (
            <LabelImportantIcon htmlColor="#f7cb69" />
          ) : (
            <LabelImportantIcon />
          )}
        </IconButton>
        <h6>{to}</h6>
        <div>
          <p onClick={() => history.push("/inbox")}>inbox</p>
          <span>x</span>
        </div>
      </PrimWrap>
      <SocialWrap>
        <IconButton>
          <PrintIcon />
        </IconButton>
        <IconButton>
          <LaunchIcon />
        </IconButton>
      </SocialWrap>
    </Container>
  );
}

export default MailTopInfo;

const Container = styled.div`
  display: flex;
  height: 60px;
  border-top: 1px solid lightgrey;
`;

const PrimWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  margin-right: auto;

  h6 {
    margin-right: 20px;
    color: #6b7280;
  }

  div {
    display: flex;
    background-color: rgb(221, 221, 221);
    border-radius: 5px;
    font-size: small;
    p {
      background-color: rgb(221, 221, 221);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 3px;

      &:hover {
        background-color: rgb(102, 102, 102);
        color: white;
        font-weight: 500;
      }
    }

    span {
      background-color: rgb(221, 221, 221);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 3px;

      &:hover {
        background-color: rgb(102, 102, 102);
        color: white;
        font-weight: 500;
      }
    }
  }
`;

const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: #5f6368;
  }
`;
