import React from "react";
import styled from "styled-components";
import { emailData } from "./temp/EmailData";
import EmailItem from "./EmailItem/EmailItem";
import EmailHeader from "./EmailItem/EmailHeader";
import TopWrap from "./EmailItem/TopWrap";
import SendMessage from "./EmailItem/SendMessage";
import { selectSendMessageOpen } from "../features/sendSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function EmailView() {
  const sendMessageOpen = useSelector(selectSendMessageOpen);
  const [emails, setEmails] = useState([]);

  // This is use to retrieve data from FIREBASE
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <Container>
      <TopWrap />
      <EmailHeader />
      <EmailWrap>
        {emails.map(
          ({
            id,
            data: { message, read, starred, label, subject, timestamp, to },
          }) => (
            <EmailItem
              key={id}
              id={id}
              message={message}
              read={read}
              starred={starred}
              label={label}
              subject={subject}
              timestamp={timestamp}
              to={to}
            />
          )
        )}
        {/* {emailData.map(
          ({ id, starred, from, subject, message, recieved, read }) => (
            <EmailItem
              key={id}
              id={id}
              starred={starred}
              from={from}
              subject={subject}
              message={message}
              recieved={recieved}
              read={read}
            />
          )
        )} */}
      </EmailWrap>
      {sendMessageOpen && <SendMessage />}
    </Container>
  );
}

export default EmailView;

const Container = styled.div`
  position: relative;

  background-color: white;
`;

const EmailWrap = styled.div``;
