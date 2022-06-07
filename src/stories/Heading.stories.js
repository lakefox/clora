import Heading from './Heading.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
    title: 'Layout/Heading',
    component: Heading,
    argTypes: {
        color: { control: 'color' },
        value: {
            name: "Heading",
            type: { name: "string", required: true },
            defaultValue: "Hello!",
            control: 'text'
        },
        size: {
            control: { type: 'select' },
            options: ['xsmall', 'small', 'medium', 'large'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
    Component: Heading,
    props: args,
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    value: "Hello!"
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    value: "Hello!"
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    value: "Hello!"
};

export const Xsmall = Template.bind({});
Xsmall.args = {
    size: 'xsmall',
    value: "Hello!"
};

