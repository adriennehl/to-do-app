import React from "react";
import styled from "styled-components";
import turnitup from "./turnitup.jpg"
import PostData from "../Data/posts.json";



const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
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
  padding: 10px;
  color: #D8D8D8;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 10px;
  color: #00FFFF;
`;

const Title = styled.h3`
    color: #0d1a26;
    font-weight: 200;
    self-alight:center
`;

const Description = styled.h3`
    color: #FF0000;
    font-weight: 200;
    self-align:center
`;

const Date = styled.h3`
    color: #FF0000;
    font-weight: 200;
    self-align:right
`;

const Picture = styled.img`
      width: 150px;
      height: 150px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
`;


const PreviewFunctions = () => (
        <Wrapper3>
            {PostData.map((postDetail, index) => {
                return(
                    <Wrapper>
                        <Picture src={turnitup}/>
                        <Wrapper2>
                            <Title>{postDetail.title}</Title>,
                            <Description> {postDetail.description} </Description>
                        </Wrapper2>
                        <Date>{postDetail.date}</Date>
                    </Wrapper>
                )
            })}
        </Wrapper3>
);

export default PreviewFunctions;
