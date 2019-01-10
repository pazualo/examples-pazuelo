import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>GitHub Battle: Battle your friends!!!</h1>
        <Link className="button" to="/battle">
          battle
        </Link>
      </div>
    );
  }
}
