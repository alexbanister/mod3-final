import { shallow, mount } from 'enzyme';
import Card from './index';
import React from 'react';
import fetchMock from 'fetch-mock';

describe('Card snapshot', () => {

  it('should always match the snapshot', () => {
    const house = {
      name:"House Corbray of Heart's Home",
      coatOfArms:"Three black ravens in flight",
      words:"",
      titles:[
        "Lord of Heart's Home",
        "King of the Fingers (historical)"
      ],
      founded:"",
      seats:[
        "Heart's Home"
      ],
      ancestralWeapons:[
        "Lady Forlorn"
      ]
    };
    const wrapper = shallow(<Card house={house} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const house = {
      name:"House Corbray of Heart's Home",
      coatOfArms:"Three black ravens in flight",
      words:"",
      titles:[
        "Lord of Heart's Home",
        "King of the Fingers (historical)"
      ],
      founded:"",
      seats:[
        "Heart's Home"
      ],
      ancestralWeapons:[
        "Lady Forlorn"
      ]
    };
    const wrapper = shallow(<Card house={house} />);

    expect(wrapper.instance().props.house).toEqual(house);
  });

  it('should have display sworn members', () => {
    const mockReturn = [{ name: "Corwyn Corbray" }, { name: "Gwayne Corbray" }];
    fetchMock.post('http://localhost:3001/api/v1/character', {
      status: 200,
      body: mockReturn
    });

    const house = {
      name:"House Corbray of Heart's Home",
      coatOfArms:"Three black ravens in flight",
      words:"",
      titles:[
        "Lord of Heart's Home",
        "King of the Fingers (historical)"
      ],
      founded:"",
      seats:[
        "Heart's Home"
      ],
      ancestralWeapons:[
        "Lady Forlorn"
      ],
      swornMembers:[
        "https://www.anapioficeandfire.com/api/characters/1182"
      ]
    };
    const wrapper = shallow(<Card house={house} />);

    expect(wrapper.state()).toEqual({ swornMembers: [] });

    wrapper.find('button').simulate('click');

    console.log(wrapper.debug());
    // expect(wrapper.state()).toEqual({ swornMembers: mockReturn });
  });
});
