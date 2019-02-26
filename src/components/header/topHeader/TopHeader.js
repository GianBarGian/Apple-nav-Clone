import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';

const StyledTopHeader = styled.div`
    background: #575757;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
`;

export default function TopHeader ({ data }) {
    return (
        <StyledTopHeader>
            {
                data.map(nav => 
                    <TopNav key={nav.name} nav={nav.name} />
                )
            }
        </StyledTopHeader>
    )
}