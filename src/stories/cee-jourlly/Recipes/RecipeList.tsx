import React from 'react';
import ListGuesser from '../../../list/ListGuesser';
import FieldGuesser from '../../../field/FieldGuesser';

const RecipeList = () => (
  <ListGuesser>
    <FieldGuesser source="name" />
    <FieldGuesser source="info" />
    <FieldGuesser source="ingredients" />
    <FieldGuesser source="rating" />
  </ListGuesser>
);

export default RecipeList;
