import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepo } from '../utils/api';
import Loading from './Loading';
const SelectedLanguage = props => {
  var languegues = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0'
      }}>
      {languegues.map(lang => {
        return (
          <li
            key={lang}
            onClick={props.onSelecet.bind(null, lang)}
            style={{
              listStyleType: 'none',
              margin: 10,
              fontWeight: 'bold',
              cursor: 'pointer',
              color: lang === props.selectedLanguage ? '#d0021b' : null
            }}>
            {lang}
          </li>
        );
      })}
    </ul>
  );
};

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelecet: PropTypes.func.isRequired
};

const RepoGrid = props => {
  console.log(props);
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
      {props.repos.map((repo, index) => {
        return (
          <li
            style={{
              listStyleType: 'none',
              margin: 10,
              fontWeight: 'bold'
            }}
            key={repo.name}
            style={{ textAlign: 'center', margin: 20, listStyleType: 'none' }}>
            <div>#{index + 1}</div>
            <ul style={{ marginButtom: 7 }}>
              <li
                style={{
                  listStyleType: 'none',
                  margin: 10,
                  fontWeight: 'bold'
                }}>
                <img
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                  style={{ width: 150, borderRadius: '50%' }}
                />
              </li>
              <li
                style={{
                  listStyleType: 'none',
                  margin: 10,
                  fontWeight: 'bold'
                }}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li
                style={{
                  listStyleType: 'none',
                  margin: 10,
                  fontWeight: 'bold'
                }}>
                @{repo.owner.login}
              </li>
              <li
                style={{
                  listStyleType: 'none',
                  margin: 10,
                  fontWeight: 'bold'
                }}>
                {repo.stargazers_count}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLang = this.updateLang.bind(this);
  }
  componentDidMount() {
    //Ajax
    this.updateLang(this.state.selectedLanguage);
  }
  updateLang(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });
    fetchPopularRepo(lang).then(repos => {
      this.setState(() => {
        return {
          repos
        };
      });
    });
  }
  render() {
    return (
      <div>
        <SelectedLanguage
          onSelecet={this.updateLang}
          selectedLanguage={this.state.selectedLanguage}
        />
        {!this.state.repos ? (
          <Loading speed={100} />
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}
