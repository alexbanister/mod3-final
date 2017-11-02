export const getHouses = () => {
  return fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => parsedResponse);
};
