import { Dimension } from '../types/Dimension';

export const Length : Dimension = {
	key: 'length',
	units: [
		{ short: 'nm', singular: 'nautical-mile', plural: 'nautical-miles', ratio: 1 },
		{ short: 'mi', singular: 'mile', plural: 'miles', ratio: 1.150779 },
		{ short: 'yd', singular: 'yard', plural: 'yards', ratio: 2025.372 },
		{ short: 'ft', singular: 'foot', plural: 'feet', ratio: 6076.115 },
		{ short: 'in', singular: 'inch', plural: 'inches', ratio: 72913.39 },
		{ short: 'm', singular: 'meter', plural: 'meters', ratio: 1852 }
	]
};