import type { Meta, StoryObj } from '@storybook/react';
import { NavSearch } from '../app/components';

const meta = {
    title: "UI/NavSearch",
    component: NavSearch,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof NavSearch>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Nunca dejes de buscar'
    }
};
