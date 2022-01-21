import { Dimension } from '../types/Dimension';

export const Time : Dimension = {
	key: 'time',
	units: [
		{ short: 's', singular: 'second', plural: 'seconds', ratio: 31557600 },
		{ short: 'm', singular: 'minute', plural: 'minutes', ratio: 525960 },
		{ short: 'h', singular: 'hour', plural: 'hours', ratio: 8766 },
		{ short: 'd', singular: 'day', plural: 'days', ratio: 365.25 },
		{ short: 'wk', singular: 'week', plural: 'weeks', ratio: 52.17857 },
		{ short: 'yr', singular: 'year', plural: 'years', ratio: 1 }
	]
};