import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav({ nav }) {
    return (
        <Link to={`/${nav}`}>
            <span>{nav}</span>
        </Link>
    )
}