export const getHouses = () => {
  return fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => parsedResponse);
};

export const fetchSwornMember = (members) => {
  const allMembers = members.map( url => {
    return fetch('http://localhost:3001/api/v1/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
      .then(response => response.json())
      .then(parsedResponse => parsedResponse);
  });
  return Promise.all(allMembers);
};
const test = [];