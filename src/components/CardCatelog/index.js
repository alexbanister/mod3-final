import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHouses } from '../../api';
import { updateHouses } from '../../actions/'

class CardCatelog extends Component {
  async componentDidMount() {
    const allHouses = await getHouses();
    console.log(allHouses);
  }
  render(){
    return (
      <h3>Hello</h3>
    )
  }
};

CardCatelog.propTypes = {
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
