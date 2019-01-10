import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPewiew';
const Player = props => {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{ textAlign: 'center' }}>Score:{props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
};

const Profile = props => {
  return (
    <PlayerPreview avatar={props.info.avatar_url} username={props.info.login}>
      <ul className="space-list-items">
        {props.info.name && <li>{props.info.name}</li>}
        {props.info.location && <li>{props.info.location}</li>}
        {props.info.company && <li>{props.info.company}</li>}
        <li>Followers: {props.info.followers}</li>
        <li>Following: {props.info.following}</li>
        <li>Public Repos: {props.info.public_repos}</li>
        {props.info.blog && (
          <li>
            <a href={props.info.blog}>{props.info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
};

export default Player;
