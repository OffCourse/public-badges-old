import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import Badge from "./Badge";

storiesOf("Badge", module)
  .addDecorator(withKnobs)
  .add("display text", () => {
    return (
      <Badge onClick={action("badge-click")}>
        {text("Label", "Hello Badge")}
      </Badge>
    );
  });
