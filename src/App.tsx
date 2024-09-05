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

const AppWrapper = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
