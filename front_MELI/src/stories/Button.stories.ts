import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/components/Button';

const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        size: 'large',
        content: 'Primary Button',
    }
};

export const Secondary: Story = {
    args: {
        primary: false,
        size: 'large',
        content: 'Secondary Button',
    }
};