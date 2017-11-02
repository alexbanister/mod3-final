import * as reducers from './reducer';

describe('CardCatalog Reducers', () => {
  it('houses should set default state', () => {
    const expectation = [];

    expect(reducers.houses(undefined, {})).toEqual(expectation);
  });

  it('UPDATE_HOUSES should add houses to state', () => {
    const action = {
      type: 'UPDATE_HOUSES',
      allHouses: [{
        url:"https://www.anapioficeandfire.com/api/houses/81",
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
      }]
    };
    action.houses;

    expect(reducers.houses(undefined, action)).toEqual(action.allHouses);
  });
});
