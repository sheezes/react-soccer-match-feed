import React, { Component } from 'react';
import feedData from './FeedData'

import MatchInfo from '../MatchInfo/MatchInfo';
import MatchEvent from '../MatchEvent/MatchEvent';

import './MatchFeedStyles.css';


class MatchFeed extends Component {

    constructor() {
        super();
        this.state = { matchEvents: [] };
    }

    componentWillMount() {

        this._fetchFeed().then(data => {
            this.setState({ matchEvents: data });
        })
    }



    render() {

        let matchEvents = this.state.matchEvents.map((v, i) => <MatchEvent key={i} feed={v} />);

        return (
            <div className="match-feed">
                <MatchInfo />
                {matchEvents}
            </div>
        );

    }


    _fetchFeed() {

        let promise = new Promise( (resolve, reject) => {

            setTimeout(() => {
                resolve(feedData.sort( (a,b) => a.minute < b.minute));
            }, 1000);

        });

        return promise;

    }
}

export default MatchFeed;