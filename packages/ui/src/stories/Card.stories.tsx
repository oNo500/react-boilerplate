import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@repo/ui/components/card';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <button>Action</button>
        </CardAction>
      </CardHeader>
      <CardContent>This is the card content area.</CardContent>
      <CardFooter>
        <button>Footer Button</button>
      </CardFooter>
    </Card>
  ),
};
