import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import LogoComponent from "./logo_component";

export default {
  title: "Logo",
  component: LogoComponent,
  parameters: {
    backgrounds: {
      default: "White",
      values: [
        { name: "Multi", value: "rgb(208, 208, 208, 100%)" },
        { name: "Black", value: "#000000" },
        { name: "White", value: "#ffffff" },
      ],
    },
  },
} as Meta;

const MultiTemplate: Story<any> = (args) => {
  return (
    <>
      <LogoComponent {...args} src="default" />
      <LogoComponent {...args} src="black" />
      <LogoComponent {...args} src="white" />
    </>
  );
};

const Template: Story<any> = (args) => <LogoComponent {...args} />;

export const Multi = MultiTemplate.bind({});
Multi.parameters = {
  backgrounds: { default: "Multi" },
};
Multi.args = {
  width: "40%",
  height: "auto",
};

export const Default = Template.bind({});
Default.args = {
  width: "40%",
  height: "auto",
  src: "default",
};

export const Black = Template.bind({});
Black.args = {
  width: "40%",
  height: "auto",
  src: "black",
};

export const White = Template.bind({});
White.parameters = {
  backgrounds: { default: "Black" },
};
White.args = {
  width: "40%",
  height: "auto",
  src: "white",
};
