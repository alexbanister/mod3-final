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
        <div className='title'>
          House:
        </div>
        <div className='entry'>
          {this.props.house.name}
        </div>
        <div className='title'>
          Words:
        </div>
        <div className='entry'>
          {this.props.house.words}
        </div>
        <div className='title'>
          Founded:
        </div>
        <div className='entry'>
          {this.props.house.founded}
        </div>
        <div className='title'>
          Coat Of Arms:
        </div>
        <div className='entry'>
          {this.props.house.coatOfArms}
        </div>
        <div className='title'>
          Seats:
        </div>
        <div className='entry'>
          {this.displayLists(this.props.house.seats)}
        </div>


        <div className='title'>
          Titles:
        </div>
        <div className='entry'>
          {this.displayLists(this.props.house.titles)}
        </div>
        <div className='title'>
          Ancestral Weapons:
        </div>
        <div className='entry'>
          {this.displayLists(this.props.house.ancestralWeapons)}
        </div>
        <div className='swornMembers'>
          <button
            onClick={()=>{ this.getSwornMember(this.props.house.swornMembers); }}>
            Show Sworn Members
          </button>
          {this.showSwornMembers(this.state.swornMembers)}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
