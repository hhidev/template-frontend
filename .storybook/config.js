import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import 'antd/dist/antd.less';

addDecorator(
    withKnobs(),
    withInfo()
);

const loadStories = () => {
    const req = require.context('../src', true, /\__stories__\/.+\.story\.[jt]sx?$/);
    req.keys().forEach(fname => req(fname));
}

configure(loadStories, module);
