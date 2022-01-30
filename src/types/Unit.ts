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
export type UnitOperand = SimpleUnit | ComplexUnit;

// @types SimpleUnit, ComplexUnit, UnitKey, UnitRatio, UnitRate
export type SimpleUnit = UnitKey;
export interface ComplexUnit {
    key: UnitKey,
    prefix: PrefixAlias
}

export type UnitKey = string;
export type UnitRatio = number;     
export interface SimpleRate {
    baseUnit: UnitKey,
    rateUnit: UnitKey
}
export interface ComplexRate {
    baseUnit: ComplexUnit,
    rateUnit: ComplexUnit
}