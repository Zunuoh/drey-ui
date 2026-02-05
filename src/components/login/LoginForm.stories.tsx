import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./loginForm";

const meta: Meta = {
    title: "Example/Form",
    component: LoginForm,
    parameters: {
        layout: "centered"
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};