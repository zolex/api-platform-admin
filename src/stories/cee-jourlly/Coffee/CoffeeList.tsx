import React from 'react';
import ListGuesser from '../../../list/ListGuesser';
import FieldGuesser from '../../../field/FieldGuesser';

const CoffeeList = () => (
  <ListGuesser>
    <FieldGuesser source="roaster" />
    <FieldGuesser source="name" />
    <FieldGuesser source="roastLevel" />
    <FieldGuesser source="beans" />
    <FieldGuesser source="origin" />
    <FieldGuesser source="rating" />
  </ListGuesser>
);

export default CoffeeList;
