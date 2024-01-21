
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
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #9252ce 
		"--color-primary-50": "239 229 248", // #efe5f8
		"--color-primary-100": "233 220 245", // #e9dcf5
		"--color-primary-200": "228 212 243", // #e4d4f3
		"--color-primary-300": "211 186 235", // #d3baeb
		"--color-primary-400": "179 134 221", // #b386dd
		"--color-primary-500": "146 82 206", // #9252ce
		"--color-primary-600": "131 74 185", // #834ab9
		"--color-primary-700": "110 62 155", // #6e3e9b
		"--color-primary-800": "88 49 124", // #58317c
		"--color-primary-900": "72 40 101", // #482865
		// secondary | #180219 
		"--color-secondary-50": "220 217 221", // #dcd9dd
		"--color-secondary-100": "209 204 209", // #d1ccd1
		"--color-secondary-200": "197 192 198", // #c5c0c6
		"--color-secondary-300": "163 154 163", // #a39aa3
		"--color-secondary-400": "93 78 94", // #5d4e5e
		"--color-secondary-500": "24 2 25", // #180219
		"--color-secondary-600": "22 2 23", // #160217
		"--color-secondary-700": "18 2 19", // #120213
		"--color-secondary-800": "14 1 15", // #0e010f
		"--color-secondary-900": "12 1 12", // #0c010c
		// tertiary | #f7c318 
		"--color-tertiary-50": "254 246 220", // #fef6dc
		"--color-tertiary-100": "253 243 209", // #fdf3d1
		"--color-tertiary-200": "253 240 197", // #fdf0c5
		"--color-tertiary-300": "252 231 163", // #fce7a3
		"--color-tertiary-400": "249 213 93", // #f9d55d
		"--color-tertiary-500": "247 195 24", // #f7c318
		"--color-tertiary-600": "222 176 22", // #deb016
		"--color-tertiary-700": "185 146 18", // #b99212
		"--color-tertiary-800": "148 117 14", // #94750e
		"--color-tertiary-900": "121 96 12", // #79600c
		// success | #943db0 
		"--color-success-50": "239 226 243", // #efe2f3
		"--color-success-100": "234 216 239", // #ead8ef
		"--color-success-200": "228 207 235", // #e4cfeb
		"--color-success-300": "212 177 223", // #d4b1df
		"--color-success-400": "180 119 200", // #b477c8
		"--color-success-500": "148 61 176", // #943db0
		"--color-success-600": "133 55 158", // #85379e
		"--color-success-700": "111 46 132", // #6f2e84
		"--color-success-800": "89 37 106", // #59256a
		"--color-success-900": "73 30 86", // #491e56
		// warning | #cc5c16 
		"--color-warning-50": "247 231 220", // #f7e7dc
		"--color-warning-100": "245 222 208", // #f5ded0
		"--color-warning-200": "242 214 197", // #f2d6c5
		"--color-warning-300": "235 190 162", // #ebbea2
		"--color-warning-400": "219 141 92", // #db8d5c
		"--color-warning-500": "204 92 22", // #cc5c16
		"--color-warning-600": "184 83 20", // #b85314
		"--color-warning-700": "153 69 17", // #994511
		"--color-warning-800": "122 55 13", // #7a370d
		"--color-warning-900": "100 45 11", // #642d0b
		// error | #c51d6a 
		"--color-error-50": "246 221 233", // #f6dde9
		"--color-error-100": "243 210 225", // #f3d2e1
		"--color-error-200": "241 199 218", // #f1c7da
		"--color-error-300": "232 165 195", // #e8a5c3
		"--color-error-400": "214 97 151", // #d66197
		"--color-error-500": "197 29 106", // #c51d6a
		"--color-error-600": "177 26 95", // #b11a5f
		"--color-error-700": "148 22 80", // #941650
		"--color-error-800": "118 17 64", // #761140
		"--color-error-900": "97 14 52", // #610e34
		// surface | #441546 
		"--color-surface-50": "227 220 227", // #e3dce3
		"--color-surface-100": "218 208 218", // #dad0da
		"--color-surface-200": "208 197 209", // #d0c5d1
		"--color-surface-300": "180 161 181", // #b4a1b5
		"--color-surface-400": "124 91 126", // #7c5b7e
		"--color-surface-500": "68 21 70", // #441546
		"--color-surface-600": "61 19 63", // #3d133f
		"--color-surface-700": "51 16 53", // #331035
		"--color-surface-800": "41 13 42", // #290d2a
		"--color-surface-900": "33 10 34", // #210a22
		
	}
}