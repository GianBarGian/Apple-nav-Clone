import React from 'react';
import { Link } from 'react-router-dom';

export default function BotNav({ navList, path }) {
    return (
        <div>
            {
                navList.map(nav => 
                    <Link key={nav.name} to={`/${path}/${nav.name}`}>
                        <img src={nav.img} alt="devices" />
                        <span>{nav.name}</span>
                    </Link>
                )
                
            }
        </div>
        
    )
}