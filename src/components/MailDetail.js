import React from "react";
import styled from "styled-components";
import MailTopInfo from "./EmailItem/MailTopInfo";
import MailTop from "./EmailItem/MailTop";
import SendMessage from "./EmailItem/SendMessage";
import {
  selectSelectedMail,
  selectSendMessageOpen,
} from "../features/sendSlice";
import { useSelector } from "react-redux";

function MailDetail() {
  const sendMessageOpen = useSelector(selectSendMessageOpen);
  const selectedMail = useSelector(selectSelectedMail);

  return (
    <Container>
      <MailTop />
      <MailTopInfo
        label={selectedMail?.label}
        subject={selectedMail?.subject}
        to={selectedMail?.to}
      />
      <EmailWrap>
        <span>{selectedMail?.time}</span>
        <p>{selectedMail?.message}</p>
      </EmailWrap>
      {sendMessageOpen && <SendMessage />}
    </Container>
  );
}

export default MailDetail;

const Container = styled.div`
  position: relative;
`;

const EmailWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;

  span {
    margin-left: auto;
    font-size: x-small;
  }
`;
