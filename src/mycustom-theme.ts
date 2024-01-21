
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #4CB8B8 
		"--color-primary-50": "228 244 244", // #e4f4f4
		"--color-primary-100": "219 241 241", // #dbf1f1
		"--color-primary-200": "210 237 237", // #d2eded
		"--color-primary-300": "183 227 227", // #b7e3e3
		"--color-primary-400": "130 205 205", // #82cdcd
		"--color-primary-500": "76 184 184", // #4CB8B8
		"--color-primary-600": "68 166 166", // #44a6a6
		"--color-primary-700": "57 138 138", // #398a8a
		"--color-primary-800": "46 110 110", // #2e6e6e
		"--color-primary-900": "37 90 90", // #255a5a
		// secondary | #4CB8B8 
		"--color-secondary-50": "228 244 244", // #e4f4f4
		"--color-secondary-100": "219 241 241", // #dbf1f1
		"--color-secondary-200": "210 237 237", // #d2eded
		"--color-secondary-300": "183 227 227", // #b7e3e3
		"--color-secondary-400": "130 205 205", // #82cdcd
		"--color-secondary-500": "76 184 184", // #4CB8B8
		"--color-secondary-600": "68 166 166", // #44a6a6
		"--color-secondary-700": "57 138 138", // #398a8a
		"--color-secondary-800": "46 110 110", // #2e6e6e
		"--color-secondary-900": "37 90 90", // #255a5a
		// tertiary | #4CB8B8 
		"--color-tertiary-50": "228 244 244", // #e4f4f4
		"--color-tertiary-100": "219 241 241", // #dbf1f1
		"--color-tertiary-200": "210 237 237", // #d2eded
		"--color-tertiary-300": "183 227 227", // #b7e3e3
		"--color-tertiary-400": "130 205 205", // #82cdcd
		"--color-tertiary-500": "76 184 184", // #4CB8B8
		"--color-tertiary-600": "68 166 166", // #44a6a6
		"--color-tertiary-700": "57 138 138", // #398a8a
		"--color-tertiary-800": "46 110 110", // #2e6e6e
		"--color-tertiary-900": "37 90 90", // #255a5a
		// success | #4CB8B8 
		"--color-success-50": "228 244 244", // #e4f4f4
		"--color-success-100": "219 241 241", // #dbf1f1
		"--color-success-200": "210 237 237", // #d2eded
		"--color-success-300": "183 227 227", // #b7e3e3
		"--color-success-400": "130 205 205", // #82cdcd
		"--color-success-500": "76 184 184", // #4CB8B8
		"--color-success-600": "68 166 166", // #44a6a6
		"--color-success-700": "57 138 138", // #398a8a
		"--color-success-800": "46 110 110", // #2e6e6e
		"--color-success-900": "37 90 90", // #255a5a
		// warning | #4CB8B8 
		"--color-warning-50": "228 244 244", // #e4f4f4
		"--color-warning-100": "219 241 241", // #dbf1f1
		"--color-warning-200": "210 237 237", // #d2eded
		"--color-warning-300": "183 227 227", // #b7e3e3
		"--color-warning-400": "130 205 205", // #82cdcd
		"--color-warning-500": "76 184 184", // #4CB8B8
		"--color-warning-600": "68 166 166", // #44a6a6
		"--color-warning-700": "57 138 138", // #398a8a
		"--color-warning-800": "46 110 110", // #2e6e6e
		"--color-warning-900": "37 90 90", // #255a5a
		// error | #4CB8B8 
		"--color-error-50": "228 244 244", // #e4f4f4
		"--color-error-100": "219 241 241", // #dbf1f1
		"--color-error-200": "210 237 237", // #d2eded
		"--color-error-300": "183 227 227", // #b7e3e3
		"--color-error-400": "130 205 205", // #82cdcd
		"--color-error-500": "76 184 184", // #4CB8B8
		"--color-error-600": "68 166 166", // #44a6a6
		"--color-error-700": "57 138 138", // #398a8a
		"--color-error-800": "46 110 110", // #2e6e6e
		"--color-error-900": "37 90 90", // #255a5a
		// surface | #e5c29e 
		"--color-surface-50": "251 246 240", // #fbf6f0
		"--color-surface-100": "250 243 236", // #faf3ec
		"--color-surface-200": "249 240 231", // #f9f0e7
		"--color-surface-300": "245 231 216", // #f5e7d8
		"--color-surface-400": "237 212 187", // #edd4bb
		"--color-surface-500": "229 194 158", // #e5c29e
		"--color-surface-600": "206 175 142", // #ceaf8e
		"--color-surface-700": "172 146 119", // #ac9277
		"--color-surface-800": "137 116 95", // #89745f
		"--color-surface-900": "112 95 77", // #705f4d
		
	}
}