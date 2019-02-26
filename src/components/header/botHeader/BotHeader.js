import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import BotNav from './BotNav';

const StyledBotHeader = styled.div`
    background: #4a4848;
`;

export default function BotHeader({ data }) {
    return (
        <StyledBotHeader>
            {
                data.map(navList => 
                    <Route key={navList.name} path={`/${navList.name}`} render={pr => <BotNav path={navList.name} navList={navList.subLinks} {...pr} />} />   
                )
            }
        </StyledBotHeader>
    )
}