import React from "react";
import { storiesOf } from "@storybook/react";
import ImageLoader from "./ImageLoader";

storiesOf("Components/ImageLoader", module).add("Default", () => (
  <ImageLoader src="image-url.jpg" alt="Image Alt Text" />
));
