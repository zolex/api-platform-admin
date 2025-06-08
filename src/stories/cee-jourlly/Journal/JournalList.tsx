import React from 'react';
import ListGuesser from '../../../list/ListGuesser';
import FieldGuesser from '../../../field/FieldGuesser';

const JournalList = () => (
  <ListGuesser>
    <FieldGuesser source="type" />
    <FieldGuesser source="coffee" />
    <FieldGuesser source="rating" />
    <FieldGuesser source="date" />
  </ListGuesser>
);

export default JournalList;
