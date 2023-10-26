// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	rules: [
		[
			"logo-text-primary",
			{
				"font-family": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
				"font-weight": "400",
				"font-size": "1.25rem",
			},
		],
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});