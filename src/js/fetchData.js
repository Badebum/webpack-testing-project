const fetchContries = name =>
  fetch(`https://restcountries.com/v2/name/${name}`).then(response =>
    response.json(),
  );

export default fetchContries;
