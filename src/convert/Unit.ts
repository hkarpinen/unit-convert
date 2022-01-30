import { getConversionRatio } from '../matcher/Unit';
import { getDimensionByUnitAlias } from '../matcher/Dimension';
import { ComplexUnit, SimpleUnit, UnitKey, SimpleRate, ComplexRate } from '../types/Unit';
import { Dimension } from '../types/Dimension';
import { getPrefixConversion } from './Prefix';

/** Convert between two simple units. 
 * @param  {TOperand} startUnit
 * @param  {TOperand} endUnit
 * @param  {TInput} value
 * @returns @type {number}
 * 1. Get the parent dimensions for the start/end units.
 * 2. Validate the two units share the same parent dimension.
 * 3. Get the unit conversion ratio between the two units.
 * 4. Return value * unit conversion ratio. 
 */
export const convertSimpleUnits = <
TOperand extends SimpleUnit, 
TInput extends number>(startUnit: TOperand, endUnit: TOperand, value: TInput): number => {
	const startDimension: Dimension = getDimensionByUnitAlias(startUnit);
	const endDimension: Dimension = getDimensionByUnitAlias(endUnit);
	if(areCommonUnits(startDimension, endDimension)) {
		return value * getConversionRatio(startUnit, endUnit, startDimension);
	}
	throw new Error(`${startUnit} does not share a dimension with ${endUnit}`);
};

/** Convert between two complex units. 
 * @param  {TOperand} startUnit
 * @param  {TOperand} endUnit
 * @param  {TInput} value
 * @returns @type {number}
 * 1. Cast @param value to a number type.
 * 2. Remove the SI prefix from @let operand. (i.e, giga -> one)
 * 3. Convert between the two selected @type UnitKey's
 * 4. Apply an SI prefix to @let operand (i.e, one -> deci)
 */
export const convertComplexUnits = <
TOperand extends ComplexUnit,
TInput extends number>(startUnit: TOperand, endUnit: TOperand, value: TInput): number => {
	let operand = <number>value;
	operand = getPrefixConversion(startUnit.prefix, 'one', operand);
	operand = convertSimpleUnits(startUnit.key, endUnit.key, operand);
	operand = getPrefixConversion('one', endUnit.prefix, operand);
	return operand;
};

/** Convert between two standard unit rates.
 * @param  {TRate} startRate
 * @param  {TRate} endRate
 * @param  {TInput} value
 * @returns @type {number}
 * 1. Cast @param value to a number type.
 * 2. Get the dimension for the base units. 
 * 3. Get the first factor to convert the base units.
 * 4. Set @let operand *= factor.
 * 5. Get the dimension for the rate units.
 * 6. Get the second factor to convert between the rate units.
 * 7. Set @let operand /= factor.
 * 8. Return @let operand.
 */
export const convertSimpleUnitRate = <
TRate extends SimpleRate, 
TInput extends number>(startRate: TRate, endRate: TRate, value: TInput): number => {
	let operand = <number>value;
	const startDimension: Dimension = getDimensionByUnitAlias(startRate.baseUnit);
	const factorOne = getConversionRatio(startRate.baseUnit, endRate.baseUnit, startDimension);
	operand *= factorOne;
	const endDimension: Dimension = getDimensionByUnitAlias(endRate.rateUnit);
	const factorTwo = getConversionRatio(startRate.rateUnit, endRate.rateUnit, endDimension);
	operand /= factorTwo;
	return operand;
};

/** Check if the used units belong to the same dimension. 
 * @param  {TDimension} startDimension
 * @param  {TDimension} endDimension
 * @returns @type {boolean}
 */
const areCommonUnits = <TDimension extends Dimension>(startDimension: TDimension, endDimension: TDimension): boolean => {
	return startDimension.key === endDimension.key;
}; 

