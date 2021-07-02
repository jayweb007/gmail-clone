import React from "react";
import styled from "styled-components";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";

function EmailHeader() {
  return (
    <Container>
      <PrimWrap>
        <InboxIcon />
        <p>Primary</p>
      </PrimWrap>
      <SocialWrap>
        <PeopleIcon />
        <p>Social</p>
      </SocialWrap>
      <PromWrap>
        <LocalOfferIcon />
        <p>Promotions</p>
      </PromWrap>
    </Container>
  );
}

export default EmailHeader;

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  height: 60px;
  border-top: 1px solid lightgrey;
  background-color: white;
`;

const PrimWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  min-width: 120px;
  border-bottom: 3px solid #c04b37;

  p {
    padding-left: 22px;
    color: #c04b37;
  }

  .MuiSvgIcon-root {
    color: #c04b37;
  }

  &:hover {
    background-color: #edeeee80;
    border-bottom: 3px solid #c04b37;

    p {
      color: #c04b37;
      font-weight: 400;
    }

    .MuiSvgIcon-root {
      color: #c04b37;
    }
  }
`;

const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  min-width: 120px;

  p {
    padding-left: 22px;
  }
  .MuiSvgIcon-root {
    color: #5f6368;
  }

  &:hover {
    background-color: #edeeee80;
    border-bottom: 3px solid #2563eb;

    p {
      color: #2563eb;
      font-weight: 400;
    }

    .MuiSvgIcon-root {
      color: #2563eb;
    }
  }
`;

const PromWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  min-width: 120px;

  p {
    padding-left: 22px;
  }
  .MuiSvgIcon-root {
    color: #5f6368;
  }

  &:hover {
    background-color: #edeeee80;
    border-bottom: 3px solid green;

    p {
      color: green;
      font-weight: 400;
    }

    .MuiSvgIcon-root {
      color: green;
    }
  }
`;
