module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		// project: "./tsconfig.json",
	},
	rules: {
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/explicit-function-return-type": ["off"],
		"@typescript-eslint/explicit-member-accessibility": ["off"],
		"@typescript-eslint/no-var-requires": ["off"],
		"@typescript-eslint/indent": ["off"],
		"react/prop-types": ["off"],
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
	],
	settings: {
		react: {
			version: "16",
		},
	},
}
