import fetchMock from 'fetch-mock';
import { getHouses, fetchSwornMember } from './api';

describe('fetch houses', () => {
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

  it('should return an of house objects', async () => {
    fetchMock.get('http://localhost:3001/api/v1/houses', {
      status: 200,
      body: mockReturn
    });

    const houses = await getHouses();

    expect(houses).toEqual(mockReturn);
  });
});

describe('fetch houses', () => {
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

  it('should return an of house objects', async () => {
    fetchMock.get('http://localhost:3001/api/v1/houses', {
      status: 200,
      body: mockReturn
    });

    const houses = await getHouses();

    expect(houses).toEqual(mockReturn);
  });
});
