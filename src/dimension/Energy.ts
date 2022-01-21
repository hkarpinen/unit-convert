import { Dimension } from '../types/Dimension';

export const Energy : Dimension = {
	key: 'energy',
	units: [
		{ short: 'btu', singular: 'british-thermal-unit', plural: 'british-thermal-units', ratio: 1 },
		{ short: 'eV', singular: 'electron-volt', plural: 'electron-volts', ratio: 6.585142e+21 },
		{ short: 'J', singular: 'joule', plural: 'joules', ratio: 1055.056 },
		{ singular: 'thermal-calorie', plural: 'thermal-calories', ratio: 252.1644 },
		{ singular: 'food-calorie', plural: 'food-calories', ratio: 0.252164 },
		{ short: 'ft-lb', singular: 'foot-pound', plural: 'foot-pounds', ratio: 778.1694 }
	]
};