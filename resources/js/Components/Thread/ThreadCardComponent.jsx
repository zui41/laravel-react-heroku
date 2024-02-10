import React from 'react'
import styled from 'styled-components'

const ThreadCardContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    color:#333;
`;

const CardCotainer = styled.div`
    width:100%;
    height:100%;
    padding:5%;
    background-color:white;
`;
const ThreadCardComponent = () => {
    return (
        <ThreadCardContainer>    
            <CardCotainer>     
                Thread
            </CardCotainer>
        </ThreadCardContainer>
    )
}

export default ThreadCardComponent
