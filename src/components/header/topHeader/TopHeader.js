import React from 'react';
import TopNav from './TopNav';

export default function TopHeader ({ data }) {
    return (
        <div className="top-header">
            {
                data.map(nav => 
                    <TopNav key={nav.name} nav={nav.name} />
                )
            }
        </div>
    )
}