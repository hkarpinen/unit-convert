import { Dimension } from '../types/Dimension';

export const Current : Dimension = {
	key: 'current',
	units: [
		{ short: 'A', singular: 'amp', plural: 'ampere', ratio: 1 },
		{ short: 'b', singular: 'biot', plural: 'biots', ratio: 0.1 }
	]
};