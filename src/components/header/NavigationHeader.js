import React from 'react';
import TopHeader from './topHeader/TopHeader';
import BotHeader from './botHeader/BotHeader';
import DummyData from '../../DummyData';

export default class NavigationHeader extends React.Component {
    state = {
        data: [],
    }

    componentDidMount = () => {
        this.setState({
            data: DummyData,
        })
    }

    render() {
        return (
            <div className="header">
                <TopHeader data={this.state.data} />  
                <BotHeader data={this.state.data} />
            </div>
        )
        
    }

}