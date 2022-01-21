import { Dimensions } from '../Dimensions';
import { Dimension, DimensionKey } from '../types/Dimension';
import { UnitKey } from '../types/Unit';

/** Get a dimension by it's key.
 * @param  {T} key
 * 1. Get all matches for a dimension by filtering @import Dimensions for a key match.
 * 2. Check if there are any matches.
 * 3. If there are no matches, throw an exception. Otherwise return the dimension. 
 */
export const getDimension = <T extends DimensionKey>(key: T): Dimension => {
	const matches = Dimensions.filter(dim => dim.key === key);
	if(matches.length === 0) throw new Error(`NO_SUCH_DIMENSION:${key}`);
	return matches[0];
};

/** Get a unit's dimension.
 * @param  {T} alias
 * 1. Iterate dimensions.
 * 2. Filer dimension units looking for a @type UnitKey match.
 * 3. Build an array with all unit aliases and check if it includes the alias.
 * 4. If the array does include the alias, set @let dim = dimension.
 * 5. After the dimension iteration ends, check if the unit is still undefined. 
 * 6. If the unit is defined, return it, otherwise throw an exception.
 */
export const getDimensionByUnitAlias = <T extends UnitKey>(alias: T): Dimension => {
	let dim;
	Dimensions.forEach(dimension => {
		dimension.units.filter(unit => {
			const { short, singular, plural } = unit;
			if([short, singular, plural].includes(alias)) {
				dim = dimension;
			}
		});
	});
	if(dim !== undefined) return dim;
	throw new Error(`NO_SUCH_UNIT_ALIAS:${alias}`);
};