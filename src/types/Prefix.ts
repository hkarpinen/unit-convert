/* @interface Prefix
@property short @type PrefixAlias
@property symbol @type PrefixAlias
@property factor @type PrefixFactor
@property long @type PrefixProperty<T>
*/
export interface Prefix {
    short: PrefixAlias,
    symbol?: PrefixAlias,
    factor: PrefixFactor
    long?: PrefixAlias
}

// @type PrefixFactor, PrefixAlias, PrefixProperty
export type PrefixFactor = PrefixProperty<number>;
export type PrefixAlias = PrefixProperty<string>;
export type PrefixProperty<T extends number | string> = T;