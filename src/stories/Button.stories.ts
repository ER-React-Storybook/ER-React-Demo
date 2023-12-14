// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type {Meta, StoryObj} from "@storybook/react"

import {Button} from "./Button"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Basic = {} satisfies Story

/* export const Primary = {
  args: {
    primary: true,
  },
} satisfies Story */

export const Warning = {
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red",
  },
}

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
}

export const PrimaryLongName: Story = {
  args: {
    ...Primary.args,
    label: "Primary with a really long name",
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
}
