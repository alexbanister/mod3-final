import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHouses } from '../../api';
import { updateHouses } from '../../actions/';
import Card from '../Card/';

export class CardCatelog extends Component {
  async componentDidMount() {
    const allHouses = await getHouses();
    this.props.updateHouses(allHouses);
  }

  displayAllHouses(){
    if (this.props.houses.length < 1) {
      return <img src={process.env.PUBLIC_URL + 'wolf.gif'} />;
    } else {
      return this.props.houses.map( (house, index) => {
        return <Card house={house} key={index} />;
      });
    }
  }

  render(){
    return (
      <div className='cardCatelog'>
        {this.displayAllHouses()}
      </div>
    );
  }
}

CardCatelog.propTypes = {
  updateHouses: PropTypes.func,
  houses: PropTypes.array
};

const mapStateToProps =  (store) => ({
  houses: store.houses
});

const mapDispatchToProps = (dispatch) => ({
  updateHouses: ( allHouses ) => {
    dispatch(updateHouses(allHouses));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
