import { shallow } from 'enzyme';
import Card from './index';
import React from 'react';

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

  // it('should have display sworn members', () => {
  //   const house = {
  //     name:"House Corbray of Heart's Home",
  //     coatOfArms:"Three black ravens in flight",
  //     words:"",
  //     titles:[
  //       "Lord of Heart's Home",
  //       "King of the Fingers (historical)"
  //     ],
  //     founded:"",
  //     seats:[
  //       "Heart's Home"
  //     ],
  //     ancestralWeapons:[
  //       "Lady Forlorn"
  //     ]
  //   };
  //   const wrapper = shallow(<Card house={house} />);
  //
  //   expect(wrapper.instance().props.house).toEqual(house);
  //
  //   wrapper.find('button').simulate('click')
  //
  //   expect(wrapper.instance().props.house).toEqual(house);
  // });
});
