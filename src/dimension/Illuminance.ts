import { Dimension } from '../types/Dimension';

export const Illuminance : Dimension = {
	key: 'illuminance',
	units: [
		{ short: 'lx', singular: 'lux', ratio: 1 },
		{ short: 'mc', singular: 'meter-candle', ratio: 1 },
		{ short: 'fc', singular: 'foot-candle', ratio: 0.09290304 },
		{ singular: 'flame', ratio: 0.02322576 },
		{ short: 'ph', singular: 'phot', ratio: 0.0001 },
		{ singular: 'nox', ratio: 1000 },
	]
};