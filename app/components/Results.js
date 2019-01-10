import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { battle } from '../utils/api';
import Player from './Player';
import PlayerPreview from './PlayerPewiew';
import Loading from './Loading';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    battle([players.playerOneName, players.playerTwoName]).then(results => {
      if (results === null) {
        return this.setState(() => {
          return {
            error:
              'Looks like there was error. Check both users exist on Github',
            loading: false
          };
        });
      }
      this.setState(() => {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        };
      });
    });
  }
  render() {
    let error = this.state.error;
    let winner = this.state.winner;
    let loser = this.state.loser;
    let loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }
    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle"> Reset Battle </Link>
        </div>
      );
    }
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}
