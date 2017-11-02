import * as actions from './index';

describe('CardCatalog Actions', () => {

  it('addRecentMovies should take and array and return an action', () => {
    const allHouses = [{
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
    }];
    const expected = {
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

    expect(actions.updateHouses(allHouses)).toEqual(expected);
  });
});
