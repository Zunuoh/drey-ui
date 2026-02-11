import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        children: "Paid",
        variant: "solid",
        size: "md",
        colorscheme: "success"
    }
}

export const Error: Story = {
    args: {
        children: "Error",
        variant: "solid",
        size: "md",
        colorscheme: "error"
    }
}

export const Pending: Story = {
    args: {
        children: "Pending",
        variant: "solid",
        size: "md",
        colorscheme: "pending"
    }
}

export const Refund: Story = {
    args: {
        children: "Refunded",
        variant: "solid",
        size: "md",
        colorscheme: "refund"
    }
}
