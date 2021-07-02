import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          userLogin({
            displayName: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));

    history.push("/inbox");
  };

  return (
    <Container>
      <div>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: blanchedalmond;

  div {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    object-fit: contain;
    background-color: whitesmoke;
    padding: 100px 50px;
    box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%),
      0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
