import { convertSimpleUnits, convertComplexUnits, convertSimpleUnitRate } from './convert/Unit';
import { Unit, SimpleUnit, ComplexUnit, UnitKey, SimpleRate } from './types/Unit';
import { PrefixAlias } from './types/Prefix';
import { Dimension } from './types/Dimension';
import { Dimensions } from './Dimensions';
import { getPrefixShortNames } from './matcher/Prefix';
import { getSingularUnitNames } from './matcher/Unit';
 
module.exports = {
	convertSimpleUnits: convertSimpleUnits,
	convertComplexUnits: convertComplexUnits,
	convertSimpleUnitRate: convertSimpleUnitRate,
	dimensions: Dimensions,
	getPrefixShortNames: getPrefixShortNames,
	getSingularUnitNames: getSingularUnitNames
};

export type {
	Unit, 
	SimpleUnit, 
	ComplexUnit, 
	UnitKey,
	SimpleRate,
	PrefixAlias,
	Dimension
};
