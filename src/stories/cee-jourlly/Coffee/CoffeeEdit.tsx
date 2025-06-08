import React from 'react';
import { Edit } from 'react-admin';
import CoffeeForm from './CoffeeForm';

const CoffeeEdit = () => (
  <Edit>
    <CoffeeForm />
  </Edit>
);

export default CoffeeEdit;
