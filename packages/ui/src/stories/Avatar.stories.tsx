import { Avatar, AvatarImage, AvatarFallback } from '@repo/ui/components/avatar';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="avatar" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="avatar" />
      <AvatarFallback>San</AvatarFallback>
    </Avatar>
  ),
};
