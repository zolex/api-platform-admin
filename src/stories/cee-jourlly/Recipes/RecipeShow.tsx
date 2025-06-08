import React from 'react';
import { useRecordContext } from 'react-admin';
import { Typography } from '@mui/material';
import ShowGuesser from '../../../show/ShowGuesser';
import FieldGuesser from '../../../field/FieldGuesser';

const Preparation = () => {
  const record = useRecordContext();
  return (
    <Typography component="pre" variant="body2">
      {record?.preparation}
    </Typography>
  );
};

const RecipeShow = () => (
  <ShowGuesser>
    <FieldGuesser source="name" />
    <FieldGuesser source="info" />
    <FieldGuesser source="ingredients" />
    <FieldGuesser source="rating" />
    <Preparation />
  </ShowGuesser>
);

export default RecipeShow;
