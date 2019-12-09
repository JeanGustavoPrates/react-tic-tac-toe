import React, { Component } from 'react';
import StyledStatusBar from './styles';

class StatusBar extends Component {
    render() {
        return (
            <StyledStatusBar>
                <span>{this.props.text}</span>
            </StyledStatusBar>
        );
    }
}

export default StatusBar;