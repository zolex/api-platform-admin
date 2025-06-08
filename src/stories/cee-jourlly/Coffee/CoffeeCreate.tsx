import React from 'react';
import { Create } from 'react-admin';
import CoffeeForm from './CoffeeForm';

const CoffeeCreate = () => (
  <Create>
    <CoffeeForm />
  </Create>
);

export default CoffeeCreate;
