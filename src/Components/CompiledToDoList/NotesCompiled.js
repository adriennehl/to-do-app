import React from "react";
import styled from "styled-components";
import CreateNoteButton from "./CreateNoteButton";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
`;

const Title = styled.h1`
    color: #0d1a26;
    align-self: self-start;
    font-weight: 400;
`;



const NotesCompiled = () => (
    <Wrapper>
        <Title>Example Styled-Components</Title>
            <CreateNoteButton />
    </Wrapper>
);

export default NotesCompiled;

