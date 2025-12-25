import { eslintStorybookRules } from './eslint-storybook.js';

export const storybookRules = [
	{
		rules: {
			...eslintStorybookRules.rules,
		},
	},
];
