import React, { Component } from 'react';
import './CardEventStyles.css';
import '../MatchEventStyles.css';


class CardEvent extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="match-event">
                <div className="match-event-body">
                    <div className={this.props.data.card.color.toLowerCase() + '-card-illus card-event-box'}>
                        {this.props.data.card.name} - {this.props.data.card.color === 'red' ? 'Red' : 'Yellow'} Card
                    </div>

                    <span className="match-event-time">{this.props.data.minute}</span>
                    {this.props.data.content}
                </div>
            </div>
        );

    }
}


export default CardEvent;