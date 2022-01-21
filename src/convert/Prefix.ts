import { getPrefix } from '../matcher/Prefix'; 
import { PrefixAlias } from '../types/Prefix';

/** Get a prefix conversion between @param startAlias and @param endAlias
 * @param  {TPrefix} startAlias
 * @param  {TPrefix} endAlias
 * @param  {TInput} value
 * @returns @type {number}
 * 1. Get the factor of the starting prefix.
 * 2. Get the factor of the ending prefix.
 * 3. Figure out which direction we need to move the decimal point.
 * 4. Calculate the base difference between the two prefixes.
 * 5. Calculate the amount to divide/multiply by.
 * 6. Perform the division/multiply operation.
 * 7. Return the prefix. 
 */
export const getPrefixConversion = <
TPrefix extends PrefixAlias, 
TInput extends number>(startAlias: TPrefix, endAlias: TPrefix, value: TInput): number => {
	const startFactor = getPrefix(startAlias).factor;
	const endFactor = getPrefix(endAlias).factor;
	const multiply = endFactor < startFactor;
	const difference = Math.abs(startFactor - endFactor);
	const base = Math.pow(10, difference);
	return multiply ? (value * base) : (value / base);
}; 