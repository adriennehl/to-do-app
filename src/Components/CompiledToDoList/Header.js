import React from "react";
import styled from "styled-components";
import CreateNoteButton from "./CreateNoteButton";
import PreviousPageButton from "./PreviousPageButton";
import SearchBar from "./SearchBar";
import CompletionBox from "./CompletionBox";

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  width: 80%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
`;

const WrapperRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  width: 80%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
`;

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;  
  padding: 50px;
  width: 80%;            
  color: #444;

`;

const Title = styled.h1`
    color: #0d1a26;
    align-self: self-start;
    font-weight: 400;
`;

const Header = () => (

    <WrapperCol>
        <WrapperRow2>
            <PreviousPageButton />
            <Title>To Do App</Title>
            <CreateNoteButton />
        </WrapperRow2>
        <WrapperRow>
            <SearchBar />
            <Title>To Do App</Title>
            <CreateNoteButton />
        </WrapperRow>
    </WrapperCol>
);

export default Header;


