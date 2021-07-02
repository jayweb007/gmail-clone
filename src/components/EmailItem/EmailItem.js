import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Checkbox, IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/sendSlice";

function EmailItem({
  id,
  message,
  read,
  starred,
  label,
  subject,
  timestamp,
  to,
}) {
  const [star, setStar] = useState(starred);
  const [tag, setTag] = useState(label);
  const history = useHistory();
  const dispatch = useDispatch();
  const time = moment(timestamp?.toDate().getTime()).format("lll");

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        message,
        read,
        starred,
        label,
        subject,
        time,
        to,
      })
    );

    history.push("/detail");
  };

  return (
    <Container>
      <Checkbox color="default" />
      <IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
        {star ? <StarIcon htmlColor="#f7cb69" /> : <StarBorderIcon />}
      </IconButton>
      <IconButton onClick={() => (tag ? setTag(false) : setTag(true))}>
        {tag ? (
          <LabelImportantIcon htmlColor="#f7cb69" />
        ) : (
          <LabelImportantIcon />
        )}
      </IconButton>
      <p onClick={openMail} className={read ? "" : "unread"}>
        {to}
      </p>
      <div onClick={openMail}>
        <p className={read ? "" : "unread"}>{subject}</p> -
        <span>{message}</span>
      </div>
      <p onClick={openMail} className={read ? "" : "unread"}>
        {time}
      </p>
    </Container>
  );
}

export default EmailItem;

const Container = styled.div`
  padding: 0 10px 0 10px;
  border-top: 1px solid lightgrey;
  display: grid;
  grid-template-columns: min-content min-content min-content 231px auto 140px;
  /* grid-template-columns: min-content min-content 120px auto min-content; */
  align-items: center;
  cursor: pointer;
  font-size: smaller;
  background-color: #f3f4f6;

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 5px;
    }

    span {
      color: #4b5563;
      margin-left: 5px;
    }
  }
  .unread {
    color: black;
    font-weight: 600;
  }

  &:hover {
    border-top: 1px solid lightgrey;
    border-bottom: 2px solid lightgrey;
  }

  /* .MuiButtonBase-root {
    width: 1.5em;
    height: 1.5em;
  } */
`;
