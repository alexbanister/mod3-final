export const getHouses = () => {
  fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => console.log(parsedResponse));
};
