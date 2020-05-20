import React from 'react';
import * as cities from 'city.list.json';

const Cities = () => {
  const { default: lists } = cities;
  let cityList = [];
  lists.map((city) => {
    cityList.push({
      id: city.id,
      name: `${city.name}, ${city.state ? city.state + ',' : ''}${
        city.country
      }`,
    });
  });
  console.log(cityList);

  return <div cityList={cityList} />;
};
export default Cities;
