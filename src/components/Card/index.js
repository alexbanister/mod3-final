import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ house }) => {
  const displayLists = (list) => {
    return list.map( item => {
      return <p key={item}>{item}</p>;
    });
  };

  return (
    <div className='card'>
      <h3>{house.name}</h3>
      <h3>{house.words}</h3>
      <h3>{house.founded}</h3>
      <h3>{house.coatOfArms}</h3>
      <h3>{displayLists(house.seats)}</h3>
      <h3>{displayLists(house.titles)}</h3>
      <h3>{displayLists(house.ancestralWeapons)}</h3>
    </div>
  );
};

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
