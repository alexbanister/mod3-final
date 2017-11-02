import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSwornMember } from '../../api';
import './styles.css';

export class Card extends Component {
  constructor(){
    super();
    this.state = {
      swornMembers: []
    };
  }

  showSwornMembers(members) {
    return members.map( (member, index) => {
      return <h5 key={`${member.name}-${index}`}>{member.name}</h5>;
    });
  }

  async getSwornMember(membersURLs) {
    const allMembers = await fetchSwornMember(membersURLs);
    this.setState({
      swornMembers: allMembers
    });
  }

  displayLists = (list) => {
    return list.map( item => {
      return <p key={item}>{item}</p>;
    });
  };

  render() {
    return (
      <div className='card'>
        <h3>{this.props.house.name}</h3>
        <h3>{this.props.house.words}</h3>
        <h3>{this.props.house.founded}</h3>
        <h3>{this.props.house.coatOfArms}</h3>
        <h3>{this.displayLists(this.props.house.seats)}</h3>
        <h3>{this.displayLists(this.props.house.titles)}</h3>
        <h3>{this.displayLists(this.props.house.ancestralWeapons)}</h3>
        <button
          onClick={()=>{ this.getSwornMember(this.props.house.swornMembers); }}>
          Sworn Members
        </button>
        {this.showSwornMembers(this.state.swornMembers)}
      </div>
    );
  }
}

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
