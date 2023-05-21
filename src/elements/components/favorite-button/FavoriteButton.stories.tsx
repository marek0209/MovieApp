import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FavoriteButton from "./FavoriteButton";

export default {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
} as ComponentMeta<typeof FavoriteButton>;

const Template: ComponentStory<typeof FavoriteButton> = function (args) {
  return React.createElement(FavoriteButton, args);
};

export const Default = Template.bind({});
Default.args = {
  isFavorite: false,
  onClick() {},
};

export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
  onClick() {},
};
