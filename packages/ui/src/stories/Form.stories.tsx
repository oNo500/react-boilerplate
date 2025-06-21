import { useForm } from 'react-hook-form';

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Components/Form',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

// Basic Form
export const Basic: Story = {
  render: () => {
    const form = useForm({ defaultValues: { username: '' } });
    return (
      <Form {...form}>
        <form>
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  },
};
