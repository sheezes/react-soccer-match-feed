import React, { Component } from 'react';
import './MatchEventStyles.css';


class MatchEvent extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="match-event">
                <div className="match-event-body">
                    <span className="match-event-time">{this.props.feed.minute}</span>
                    {this.props.feed.content}
                </div>
            </div>
        );

    }
}

export default MatchEvent;