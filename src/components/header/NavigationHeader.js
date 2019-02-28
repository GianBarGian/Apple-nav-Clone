import React from 'react';
import styled from 'styled-components';
import TopHeader from './topHeader/TopHeader';
import BotHeader from './botHeader/BotHeader';
import DummyData from '../../DummyData';

const StyledNavHeader = styled.div`
    text-align: center;
`;

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
            <StyledNavHeader>
                <TopHeader data={this.state.data} />  
                <BotHeader data={this.state.data} />
            </StyledNavHeader>
        )
        
    }

}