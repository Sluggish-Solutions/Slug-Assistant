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
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d4e508 
		"--color-primary-50": "249 251 218", // #f9fbda
		"--color-primary-100": "246 250 206", // #f6face
		"--color-primary-200": "244 249 193", // #f4f9c1
		"--color-primary-300": "238 245 156", // #eef59c
		"--color-primary-400": "225 237 82", // #e1ed52
		"--color-primary-500": "212 229 8", // #d4e508
		"--color-primary-600": "191 206 7", // #bfce07
		"--color-primary-700": "159 172 6", // #9fac06
		"--color-primary-800": "127 137 5", // #7f8905
		"--color-primary-900": "104 112 4", // #687004
		// secondary | #b4f8ad 
		"--color-secondary-50": "244 254 243", // #f4fef3
		"--color-secondary-100": "240 254 239", // #f0feef
		"--color-secondary-200": "236 253 235", // #ecfdeb
		"--color-secondary-300": "225 252 222", // #e1fcde
		"--color-secondary-400": "203 250 198", // #cbfac6
		"--color-secondary-500": "180 248 173", // #b4f8ad
		"--color-secondary-600": "162 223 156", // #a2df9c
		"--color-secondary-700": "135 186 130", // #87ba82
		"--color-secondary-800": "108 149 104", // #6c9568
		"--color-secondary-900": "88 122 85", // #587a55
		// tertiary | #fb7164 
		"--color-tertiary-50": "254 234 232", // #feeae8
		"--color-tertiary-100": "254 227 224", // #fee3e0
		"--color-tertiary-200": "254 220 216", // #fedcd8
		"--color-tertiary-300": "253 198 193", // #fdc6c1
		"--color-tertiary-400": "252 156 147", // #fc9c93
		"--color-tertiary-500": "251 113 100", // #fb7164
		"--color-tertiary-600": "226 102 90", // #e2665a
		"--color-tertiary-700": "188 85 75", // #bc554b
		"--color-tertiary-800": "151 68 60", // #97443c
		"--color-tertiary-900": "123 55 49", // #7b3731
		// success | #529d1d 
		"--color-success-50": "229 240 221", // #e5f0dd
		"--color-success-100": "220 235 210", // #dcebd2
		"--color-success-200": "212 231 199", // #d4e7c7
		"--color-success-300": "186 216 165", // #bad8a5
		"--color-success-400": "134 186 97", // #86ba61
		"--color-success-500": "82 157 29", // #529d1d
		"--color-success-600": "74 141 26", // #4a8d1a
		"--color-success-700": "62 118 22", // #3e7616
		"--color-success-800": "49 94 17", // #315e11
		"--color-success-900": "40 77 14", // #284d0e
		// warning | #0e0977 
		"--color-warning-50": "219 218 235", // #dbdaeb
		"--color-warning-100": "207 206 228", // #cfcee4
		"--color-warning-200": "195 194 221", // #c3c2dd
		"--color-warning-300": "159 157 201", // #9f9dc9
		"--color-warning-400": "86 83 160", // #5653a0
		"--color-warning-500": "14 9 119", // #0e0977
		"--color-warning-600": "13 8 107", // #0d086b
		"--color-warning-700": "11 7 89", // #0b0759
		"--color-warning-800": "8 5 71", // #080547
		"--color-warning-900": "7 4 58", // #07043a
		// error | #13890c 
		"--color-error-50": "220 237 219", // #dceddb
		"--color-error-100": "208 231 206", // #d0e7ce
		"--color-error-200": "196 226 194", // #c4e2c2
		"--color-error-300": "161 208 158", // #a1d09e
		"--color-error-400": "90 172 85", // #5aac55
		"--color-error-500": "19 137 12", // #13890c
		"--color-error-600": "17 123 11", // #117b0b
		"--color-error-700": "14 103 9", // #0e6709
		"--color-error-800": "11 82 7", // #0b5207
		"--color-error-900": "9 67 6", // #094306
		// surface | #7a1342 
		"--color-surface-50": "235 220 227", // #ebdce3
		"--color-surface-100": "228 208 217", // #e4d0d9
		"--color-surface-200": "222 196 208", // #dec4d0
		"--color-surface-300": "202 161 179", // #caa1b3
		"--color-surface-400": "162 90 123", // #a25a7b
		"--color-surface-500": "122 19 66", // #7a1342
		"--color-surface-600": "110 17 59", // #6e113b
		"--color-surface-700": "92 14 50", // #5c0e32
		"--color-surface-800": "73 11 40", // #490b28
		"--color-surface-900": "60 9 32", // #3c0920
		
	}
}