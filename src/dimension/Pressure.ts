import { Dimension } from '../types/Dimension';

export const Pressure : Dimension = {
	key: 'pressure',
	units: [
		{ short: 'atm', singular: 'atmosphere', plural: 'atmospheres', ratio: 1 },
		{ singular: 'bar', plural: 'bars', ratio: 1.01325 },
		{ short: 'Pa', singular: 'pascal', plural: 'pascals', ratio: 101325 }
	]
};