import { configure, addParameters } from "@storybook/react";

addParameters({
    backgrounds: [
        { name: "white", value: "white", default: true },
        { name: "light", value: "#f4f6f4" },
        { name: "medium", value: "#C8CAC9" },
        { name: "dark", value: "#797B7A" }
    ]
});

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
