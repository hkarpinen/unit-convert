import { UnitKey, Unit } from '../types/Unit';
import { Dimension, DimensionKey } from '../types/Dimension';
import { getDimension } from './Dimension';

// Get singular names for units in a dimension.
export const getSingularUnitNames = <T extends DimensionKey>(dim: T) => {
	return getDimension(dim).units.map(unit => unit.singular);
};

/** Get a unit ratio by @type UnitKey
 * @param  {TKey} alias
 * @param  {TUnits} units
 * @returns @type UnitRatio<number>
 */
export const getUnitRatio = <
TKey extends UnitKey, 
TUnits extends Unit[]>(alias: TKey, units: TUnits): number => {
	return getUnitByAlias(alias, units).ratio;
};

/** Get a unit by a @type UnitKey
 * @param  {TKey} alias
 * @param  {TUnits} units
 * @returns @type Unit
 */
export const getUnitByAlias = <
TKey extends UnitKey, 
TUnits extends Unit[]>(alias: TKey, units: TUnits): Unit => {
	const matches =  units.filter(unit => [unit.short, unit.singular, unit.plural].includes(alias));
	if(matches.length === 0) throw new Error(`NO_SUCH_UNIT_ALIAS:${alias}`);
	return matches[0];
};

/** Get a conversion ratio using unit keys.
 * @param  {TKey} startAlias
 * @param  {TKey} endAlias
 * @param  {TDimension} dimension
 * @returns @type UnitRatio
 */
export const getConversionRatio = <
TKey extends UnitKey, 
TDimension extends Dimension>
	(startAlias: TKey, endAlias: TKey, dimension: TDimension): number => {
	return getUnitRatio(endAlias, dimension.units) / getUnitRatio(startAlias, dimension.units);
};
