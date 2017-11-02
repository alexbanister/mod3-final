import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHouses } from '../../api';
import { updateHouses } from '../../actions/';

class CardCatelog extends Component {
  async componentDidMount() {
    const allHouses = await getHouses();
    this.props.updateHouses(allHouses);
  }
  render(){
    return (
      <h3>Hello</h3>
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
