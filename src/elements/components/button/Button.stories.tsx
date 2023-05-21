import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args) {
  return React.createElement(Button, args);
};

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "Button",
};

export const LongTextButton = Template.bind({});
LongTextButton.args = {
  href: "#",
  children: "Long Text Button",
};
