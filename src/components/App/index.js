import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './styles.css';
import { connect } from 'react-redux';
import CardCatelog from '../CardCatelog/';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardCatelog />
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
