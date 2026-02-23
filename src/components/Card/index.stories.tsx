import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "."

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        variant: "solid",
        size: "lg",
        colorscheme: "primary",
        name: "Audrey Zunuoh",
        description: "Hello everyone, I am Audrey Zunuoh, a software engineer and a UI/UX designer.",
        followers: "Follow"
    }
}