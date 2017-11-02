import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import CardCatelog from './index';
import React from 'react';


describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      houses: []
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<CardCatelog
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});
