import { Dimension } from '../types/Dimension';

export const Mass : Dimension = {
	key: 'mass',
	units: [
		{ singular: 'short-ton', plural: 'short-tons', ratio: 1 },
		{ singular: 'long-ton', plural: 'long-tons', ratio: 0.892857 },
		{ singular: 'stone', plural: 'stones', ratio: 142.8571 },
		{ short: 'lb', singular: 'pound', plural: 'pounds', ratio: 2000 },
		{ short: 'oz', singular: 'ounce', plural: 'ounces', ratio: 32000 },
		{ singular: 'metric-ton', plural: 'metric-tonnes', ratio: 0.907185 },
		{ short: 'g', singular: 'gram', plural: 'grams', ratio: 907184.7 },
		{ singular: 'carat', plural: 'carats', ratio: 4535924 }
	]
};