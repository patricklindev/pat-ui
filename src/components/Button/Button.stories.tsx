import React from "react";
import { action } from "@storybook/addon-actions";
import Button, { ButtonType, ButtonSize } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const buttonStyle: React.CSSProperties = {
  marginRight: "5px",
  marginTop: "5px",
};

export const DefaultButton = () => (
  <Button onClick={action("Default Button clicked")}>Default Button</Button>
);

export const DiffSizeButton = () => (
  <div>
    <Button
      style={buttonStyle}
      btnSize={ButtonSize.Small}
      onClick={action("Small Button clicked")}
    >
      Small Button
    </Button>
    <Button style={buttonStyle} onClick={action("Default Button clicked")}>
      Default Button
    </Button>
    <Button btnSize={ButtonSize.Large} onClick={action("Large Button clicked")}>
      Large Button
    </Button>
  </div>
);

export const DiffTypeButton = () => (
  <div>
    <Button
      style={buttonStyle}
      btnType={ButtonType.Primary}
      onClick={action("Primary Button clicked")}
    >
      Primary Button
    </Button>
    <Button
      style={buttonStyle}
      btnType={ButtonType.Secondary}
      onClick={action("Secondary Button clicked")}
    >
      Secondary Button
    </Button>
    <Button
      style={buttonStyle}
      btnType={ButtonType.Danger}
      onClick={action("Danger Button clicked")}
    >
      Danger Button
    </Button>
    <Button
      style={buttonStyle}
      btnType={ButtonType.Default}
      onClick={action("Default Button clicked")}
    >
      Default Button
    </Button>
    <Button
      style={buttonStyle}
      disabled
      btnType={ButtonType.Default}
      onClick={action("DisabledDefault Button clicked should not work")}
    >
      Disabled Default Button
    </Button>
    <Button
      style={buttonStyle}
      btnType={ButtonType.Link}
      onClick={action("Link Button clicked")}
    >
      Link Button
    </Button>
    <Button
      disabled
      btnType={ButtonType.Link}
      onClick={action("Disabled Link Button clicked should not work")}
    >
      Disabled Link Button
    </Button>
  </div>
);
