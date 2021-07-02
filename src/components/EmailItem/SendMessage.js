import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import { closeSendMessage } from "../../features/sendSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import firebase from "firebase";

function SendMessage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      id: Math.floor(Math.random() * 1000000) + 1,
      starred: false,
      label: true,
      to: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      read: false,
    });

    dispatch(closeSendMessage());
  };

  return (
    <ComposeMessage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <p>New Message</p>
          <div>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} />
          </div>
        </Header>
        <InputTo>
          <input
            name="to"
            type="email"
            placeholder="To"
            {...register("email", { required: "Required" })}
          />
          {errors.email && <p>To is Required!</p>}
        </InputTo>
        <InputSubject>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: "Required" })}
          />
          {errors.subject && <p>Subject is Required!</p>}
        </InputSubject>
        <InputMessage>
          <input
            name="message"
            type="textarea"
            {...register("message", { required: "Required" })}
            placeholder="Message"
          />
          {errors.message && <p>Message is Required!</p>}
        </InputMessage>
        <SendButton>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </SendButton>
      </form>
    </ComposeMessage>
  );
}

export default SendMessage;

const ComposeMessage = styled.div`
  position: absolute;
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: column;
  right: 10px;
  bottom: 0;
  height: auto;
  width: 400px;
  font-size: small;
  background-color: white;
  box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  background-color: #424447;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    padding-left: 8px;
    color: white;
  }

  div {
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
      background-color: #909192;
      color: white;
      transform: scale(0.8);
    }
  }
`;
const InputTo = styled.div`
  display: flex;
  flex-direction: column;
  height: 35px;
  width: 100%;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    padding: 0 8px;
    height: 35px;
  }

  p {
    color: red;
    margin-left: auto;
    margin-right: 10px;
  }
`;
const InputSubject = styled.div`
  display: flex;
  flex-direction: column;
  height: 35px;
  width: 100%;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    padding: 0 8px;
    height: 35px;
  }

  p {
    color: red;
    margin-left: auto;
    margin-right: 10px;
  }
`;
const InputMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 160px;
  width: 100%;
  justify-content: space-between;
  word-wrap: break-word;

  input {
    outline: none;
    border: none;
    padding: 16px 8px;
    width: 96%;
  }

  p {
    color: red;
    margin-left: auto;
    margin-right: 10px;
  }
`;
const SendButton = styled.div`
  display: flex;
  place-items: center;
  height: 50px;
  padding-left: 8px;
  background-color: #424447;
`;
