import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import CardCatelogContainer, { CardCatelog } from './index';
import fetchMock from 'fetch-mock';
import React from 'react';

describe('CardCatelogContainer snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      houses: []
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<CardCatelogContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});

describe('CardCatelog snapshot', () => {

  it('should always match the snapshot', () => {
    const mockReturn = [{
      name:"House Corbray of Heart's Home",
      coatOfArms:"Three black ravens in flight",
      words:"",
      titles:[
        "Lord of Heart's Home",
        "King of the Fingers (historical)"
      ],
      founded:"",
      ancestralWeapons:[
        "Lady Forlorn"
      ],
      swornMembers:[
        "https://www.anapioficeandfire.com/api/characters/1182"
      ]
    }];
    fetchMock.get('http://localhost:3001/api/v1/houses', {
      status: 200,
      body: mockReturn
    });

    const mockFunc = jest.fn();
    const wrapper = shallow(<CardCatelog
      houses={[]}
      updateHouses={mockFunc}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
