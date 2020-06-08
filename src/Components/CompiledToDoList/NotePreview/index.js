import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 30px;
  color: #D8D8D8;
`;

const Title = styled.h3`
    color: #0d1a26;
    font-weight: 200;
`;

const Description = styled.h3`
    color: #FF0000;
    font-weight: 200;
`;

const index = () => (

    <Wrapper2>
        <Title> Hello </Title>
        <Description> Yerr </Description>
    </Wrapper2>
);

export default index;
