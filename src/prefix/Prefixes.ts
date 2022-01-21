import { Prefix } from '../types/Prefix';

// @type Prefix[]: collection of all unit prefixes.
export const Prefixes : Prefix[] = [
	{ short: 'yotta', symbol: 'Y', factor: 24, long: 'Septillion' },
	{ short: 'zetta', symbol: 'Z', factor: 21, long: 'Sextillion' },
	{ short: 'exa', symbol: 'E', factor: 18, long: 'Quintillion' },
	{ short: 'peta', symbol: 'P', factor: 15, long: 'Quadrillion' },
	{ short: 'tera', symbol: 'T', factor: 12, long: 'Trillion' },
	{ short: 'giga', symbol: 'G', factor: 9, long: 'Billion' },
	{ short: 'mega', symbol: 'M', factor: 6, long: 'Million' },
	{ short: 'kilo', symbol: 'k', factor: 3, long: 'Thousand' },
	{ short: 'hecto', symbol: 'h', factor: 2, long: 'Hundred' },
	{ short: 'deka', symbol: 'da', factor: 1 , long: 'Ten'},
	{ short: 'one',  factor: 0 },
	{ short: 'deci', symbol: 'd', factor: -1, long: 'Tenth' },
	{ short: 'centi', symbol: 'c', factor: -2, long: 'Hundredth' },
	{ short: 'milli', symbol: 'm', factor: -3, long: 'Thousandth' },
	{ short: 'micro', symbol: 'μ', factor: -6, long: 'Millionth' },
	{ short: 'nano', symbol: 'n', factor: -9, long: 'Billionth' },
	{ short: 'pico', symbol: 'p', factor: -12, long: 'Trillionth' },
	{ short: 'femto', symbol: 'f', factor: -15, long: 'Quadrillionth' },
	{ short: 'atto', symbol: 'a', factor: -18, long: 'Quintillionth' },
	{ short: 'zepto', symbol: 'z', factor: -21, long: 'Sextillionth' },
	{ short: 'yocto', symbol: 'y', factor: -24, long: 'Septillionth' }
];