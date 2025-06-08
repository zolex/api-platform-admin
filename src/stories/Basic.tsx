import React from 'react';
import { HydraAdmin, type HydraAdminProps } from '../hydra';
import ResourceGuesser from '../core/ResourceGuesser';

/**
 * # Basic `<HydraAdmin>` component
 * The `<HydraAdmin>` component without any parameter.
 */
const Basic = ({ entrypoint }: BasicProps) => (
  <HydraAdmin entrypoint={entrypoint}>
    <ResourceGuesser name="books" />
    <ResourceGuesser name="reviews" />
    <ResourceGuesser name="greetings" />
  </HydraAdmin>
);

export default Basic;

export interface BasicProps extends Pick<HydraAdminProps, 'entrypoint'> {}
