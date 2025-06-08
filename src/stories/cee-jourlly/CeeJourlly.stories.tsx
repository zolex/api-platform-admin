import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type HydraAdminProps } from '../../hydra';
import App from './CeeJourlly';

interface BasicProps extends Pick<HydraAdminProps, 'entrypoint'> {}

const AppWithProps = ({ entrypoint }: BasicProps) => (
  <App entrypoint={entrypoint} />
);

const meta = {
  title: 'Admin/Cee-Jourlly',
  component: AppWithProps,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppWithProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CeeJourlly: Story = {
  args: {
    entrypoint: process.env.ENTRYPOINT,
  },
};
