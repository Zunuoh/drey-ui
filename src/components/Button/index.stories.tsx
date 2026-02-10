import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    // docs: {
    //     description: {
    //         component: "A versatile button component with multiple variants and color schemes.",
    //     },

    // },
  },
  // argTypes: {
  //     variant: {
  //         control: "radio",
  //         options: ["solid", "outline", "ghost"],
  //     },
  //     size: {
  //         control: "radio",
  //         options: ["sm", "md", "lg"],
  //     },
  //     colorscheme: {
  //         control: "radio",
  //         options: ["primary"],
  //     },
  // },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};
