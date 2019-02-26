import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTopNav = styled.div`
    a {
        color: white;
        text-decoration: none;
    }
`;

export default function TopNav({ nav }) {
    return (
        <StyledTopNav>
            <Link to={`/${nav}`}>
                {nav}
            </Link>
        </StyledTopNav>
    )
}