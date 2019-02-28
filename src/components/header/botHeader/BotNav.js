import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBotNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 5%;
    a {
        color: white;
        text-decoration: none;
        display:flex;
        flex-direction: column;
    }
`;

export default function BotNav({ navList, path }) {
    return (
        <StyledBotNav>
            {
                navList.map(nav => 
                        <Link key={nav.name} to={`/${path}/${nav.name}`}>
                            <img src={nav.img} alt="devices" />
                            <span>{nav.name}</span>
                        </Link>
                ) 
            }
        </StyledBotNav>
        
    )
}