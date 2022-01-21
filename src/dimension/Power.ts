import { Dimension } from '../types/Dimension';

export const Power : Dimension = {
	key: 'power',
	units: [
		{ short: 'W', singular: 'watt', plural: 'watts', ratio: 1 },
		{ short: 'hp', singular: 'horsepower', ratio: 0.001341 }
	]
};