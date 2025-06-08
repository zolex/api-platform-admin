import React from 'react';
import { DateInput, useRecordContext } from 'react-admin';
import { Stack, Typography } from '@mui/material';
import InputGuesser from '../../../input/InputGuesser';

const JournalForm = () => {
  const record = useRecordContext();
  return (
    <>
      <Typography variant="h4">
        {(record && <span>Edit {record.id}</span>) ?? 'Create Journal'}
      </Typography>
      <Stack direction="row" gap={2} width="100%">
        <InputGuesser source="type" />
        <InputGuesser source="coffee" />
      </Stack>
      <Stack direction="row" gap={2} width="100%">
        <InputGuesser source="powderWeight" />
        <InputGuesser source="brewedWeight" />
        <InputGuesser source="grindLevel" />
        <InputGuesser source="grindDuration" />
      </Stack>
      <Stack direction="row" gap={2} width="100%">
        <InputGuesser source="pressure" />
        <InputGuesser source="duration" />
        <InputGuesser source="temperature" />
      </Stack>
      <Stack direction="row" gap={2} width="100%">
        <DateInput source="date" readOnly={!!record} />
        <InputGuesser source="beanAge" />
        <InputGuesser source="rating" />
      </Stack>
    </>
  );
};

export default JournalForm;
