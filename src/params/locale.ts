import type { ParamMatcher } from '@sveltejs/kit';

/** Only `no` and `en` may occupy the optional locale segment (avoids `/contact` matching as a locale). */
export const match = ((param) => param === 'no' || param === 'en') satisfies ParamMatcher;
