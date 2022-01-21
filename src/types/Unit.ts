import { PrefixAlias } from './Prefix';

/* @interface Unit
@property short: shorthand unit name.
@property singular: singular unit name.
@property plural: plural unit name
@property ratio: unit conversion ratio
*/
export interface Unit {
    short?: UnitKey
    singular: UnitKey
    plural?: UnitKey
    ratio: UnitRatio
}

// @type UnitOperand: Used during simple and complex unit/rate conversions. 
export type UnitOperand = SimpleUnit | ComplexUnit<{ key: UnitKey, prefix: PrefixAlias }>;

// @types SimpleUnit, ComplexUnit, UnitKey, UnitRatio, UnitRate
export type SimpleUnit = UnitKey;
export type ComplexUnit<T extends { key: UnitKey, prefix: PrefixAlias}> = T;
export type UnitKey = string;
export type UnitRatio = number;                                                   
export type UnitRate<T extends { baseUnit: UnitKey, rateUnit: UnitKey }> = T;