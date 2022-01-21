import { Dimension } from '../types/Dimension';

export const Angle : Dimension = {
	key: 'angle',
	units: [
		{ short: 'd', singular: 'degree', plural: 'degrees', ratio: 1 },
		{ short: 'r', singular: 'radian', plural: 'radians', ratio: 0.0174533 },
		{ short: 'g', singular: 'gradian', plural: 'gradians', ratio: 1.111111 }
	]
};