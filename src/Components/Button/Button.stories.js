import { Button } from "./Button";

export default {
  title: "AppComponents/Button",
  component: Button,
  args: {
    label: "Button",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    size: {
      control: "radio",
      options: ["small", "large"],
      default: "small",
      type: { required: true },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  render: (args, { loaded: { todo } }) => {
    console.log(todo);
    return <Button {...args} fetchedData={todo} />;
  },
};

export const PrimaryLarge = {
  args: {
    primary: true,
    size: "large",
  },
};

export const PrimaryRed = {
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ],
  args: {
    size: "small",
    backgroundColor: "red",
    onClick: () => {
      console.log("I got clicked");
    },
  },
};
