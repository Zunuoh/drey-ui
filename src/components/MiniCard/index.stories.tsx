import type { Meta, StoryObj } from "@storybook/react";
import { MiniCard } from ".";

const meta: Meta<typeof MiniCard> = {
    title: "Components/MiniCard",
    component: MiniCard,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "solid",
        size: "sm",
        colorscheme: "primary",
        name: "Audrey Zunuoh",
        id: "1223333"
    }
}
