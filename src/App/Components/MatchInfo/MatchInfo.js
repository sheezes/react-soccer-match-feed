import React, {Component} from 'react';
import './MatchInfoStyles.css';

class MatchInfo extends Component {

    constructor() {

        super();

        this.state = {
            homeTeam: 'FC Barcelona',
            awayTeam: 'Real Madrid',
            homeScore: 2,
            awayScore: 1,
            attendees: 90593,
            stadium: 'Camp Nou',
            matchDate: '21:00 25/10/2017',
            referee: 'Antonio Mateu Lahoz'
        };

    }


    render() {

        return (<div className="match-info">
            <h1>{this.state.homeTeam} {this.state.homeScore} - {this.state.awayTeam} {this.state.awayScore}</h1>

            <ul>
                <li>{this.state.matchDate}</li>
                <li>{this.state.stadium}</li>
                <li>{this.state.attendees} attendees</li>
                <li>{this.state.referee}</li>
            </ul>
        </div>);

    }

}


export default MatchInfo;