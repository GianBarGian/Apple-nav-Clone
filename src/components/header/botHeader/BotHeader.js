import React from 'react';
import { Route } from 'react-router-dom';
import BotNav from './BotNav';

export default function BotHeader({ data }) {
    return (
        <div className="bot-header">
            {
                data.map(navList => 
                    <Route key={navList.name} path={`/${navList.name}`} render={pr => <BotNav path={navList.name} navList={navList.subLinks} {...pr} />} />   
                )
            }
        </div>
    )
}