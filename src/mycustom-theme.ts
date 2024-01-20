
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
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #001D3D 
		"--color-primary-50": "217 221 226", // #d9dde2
		"--color-primary-100": "204 210 216", // #ccd2d8
		"--color-primary-200": "191 199 207", // #bfc7cf
		"--color-primary-300": "153 165 177", // #99a5b1
		"--color-primary-400": "77 97 119", // #4d6177
		"--color-primary-500": "0 29 61", // #001D3D
		"--color-primary-600": "0 26 55", // #001a37
		"--color-primary-700": "0 22 46", // #00162e
		"--color-primary-800": "0 17 37", // #001125
		"--color-primary-900": "0 14 30", // #000e1e
		// secondary | #FFC300 
		"--color-secondary-50": "255 246 217", // #fff6d9
		"--color-secondary-100": "255 243 204", // #fff3cc
		"--color-secondary-200": "255 240 191", // #fff0bf
		"--color-secondary-300": "255 231 153", // #ffe799
		"--color-secondary-400": "255 213 77", // #ffd54d
		"--color-secondary-500": "255 195 0", // #FFC300
		"--color-secondary-600": "230 176 0", // #e6b000
		"--color-secondary-700": "191 146 0", // #bf9200
		"--color-secondary-800": "153 117 0", // #997500
		"--color-secondary-900": "125 96 0", // #7d6000
		// tertiary | #003566 
		"--color-tertiary-50": "217 225 232", // #d9e1e8
		"--color-tertiary-100": "204 215 224", // #ccd7e0
		"--color-tertiary-200": "191 205 217", // #bfcdd9
		"--color-tertiary-300": "153 174 194", // #99aec2
		"--color-tertiary-400": "77 114 148", // #4d7294
		"--color-tertiary-500": "0 53 102", // #003566
		"--color-tertiary-600": "0 48 92", // #00305c
		"--color-tertiary-700": "0 40 77", // #00284d
		"--color-tertiary-800": "0 32 61", // #00203d
		"--color-tertiary-900": "0 26 50", // #001a32
		// success | #FFD60A 
		"--color-success-50": "255 249 218", // #fff9da
		"--color-success-100": "255 247 206", // #fff7ce
		"--color-success-200": "255 245 194", // #fff5c2
		"--color-success-300": "255 239 157", // #ffef9d
		"--color-success-400": "255 226 84", // #ffe254
		"--color-success-500": "255 214 10", // #FFD60A
		"--color-success-600": "230 193 9", // #e6c109
		"--color-success-700": "191 161 8", // #bfa108
		"--color-success-800": "153 128 6", // #998006
		"--color-success-900": "125 105 5", // #7d6905
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #001D3D 
		"--color-surface-50": "217 221 226", // #d9dde2
		"--color-surface-100": "204 210 216", // #ccd2d8
		"--color-surface-200": "191 199 207", // #bfc7cf
		"--color-surface-300": "153 165 177", // #99a5b1
		"--color-surface-400": "77 97 119", // #4d6177
		"--color-surface-500": "0 29 61", // #001D3D
		"--color-surface-600": "0 26 55", // #001a37
		"--color-surface-700": "0 22 46", // #00162e
		"--color-surface-800": "0 17 37", // #001125
		"--color-surface-900": "0 14 30", // #000e1e
		
	}
}