import { Dimension } from '../types/Dimension';

export const Data : Dimension = {
	key: 'data',
	units: [
		{ singular: 'bit', plural: 'bits', ratio: 1 },
		{ singular: 'byte', plural: 'bytes', ratio: 0.125 }
	]
};