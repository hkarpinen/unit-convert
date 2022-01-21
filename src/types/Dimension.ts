import { Unit } from './Unit';

//@interface Dimension
export interface Dimension {
    key: DimensionKey,
    units: Unit[]
}

//@type DimensionKey
export type DimensionKey = string;