import { Dimension } from '../types/Dimension';

export const Charge : Dimension = {
	key: 'charge',
	units: [
		{ short: 'C', singular: 'coulomb', ratio: 1 },
		{ singular: 'emu-of-charge', ratio: 0.1 },
		{ singular: 'esu-of-charge', ratio: 2997924580 },
		{ short: 'Fr', singular: 'franklin', ratio: 2997924580 },
		{ short: 'e', singular: 'elementary-charge', ratio: 6.241506363094000e+18  }
	]
};