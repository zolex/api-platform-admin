import React from 'react';
import ListGuesser from '../../../list/ListGuesser';
import FieldGuesser from '../../../field/FieldGuesser';

const RatingList = () => (
  <ListGuesser>
    <FieldGuesser source="name" />
    <FieldGuesser source="value" />
  </ListGuesser>
);

export default RatingList;
