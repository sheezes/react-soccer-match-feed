import React, { Component } from 'react';
import './MatchEventStyles.css';
import CardEvent from './CardEvent/CardEvent.js';


class MatchEvent extends Component {

    constructor() {
        super();
    }

    render() {

        if (this.props.data.type === 'card') {
            return (<CardEvent data={this.props.data} />);
        }

        return (
            <div className="match-event">
                <div className="match-event-body">
                    <span className="match-event-time">{this.props.data.minute}</span>
                    {this.props.data.content}
                </div>
            </div>
        );

    }
}

export default MatchEvent;