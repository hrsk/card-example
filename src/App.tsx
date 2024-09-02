import React from 'react';
import styled from "styled-components";
import {Card} from "./Card";

export const App = () => {
    return (
        <AppWrapper>
            <Card/>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    background-color: #e5e5e5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`