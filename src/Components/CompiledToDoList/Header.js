import React from "react";
import styled from "styled-components";
import CreateNoteButton from "./CreateNoteButton";
import PreviousPageButton from "./PreviousPageButton";
import SearchBar from "./SearchBar";
import Filter from "./Filter"
import CompletionBox from "./CompletionBox";

const WrapperRow = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  border: 1.5px solid #de5285;
`;

const Title = styled.h1`
    color: #0d1a26;
    font-weight: 400;
`;

const Header = () => (

        <WrapperRow>
            <PreviousPageButton />
            <Title>To Do App</Title>
            <CreateNoteButton />
            <Filter />
        </WrapperRow>
);

export default Header;


