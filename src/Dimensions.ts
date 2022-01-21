import { Angle } from './dimension/Angle';
import { Current } from './dimension/Current';
import { Data } from './dimension/Data';
import { Energy } from './dimension/Energy';
import { Length } from './dimension/Length';
import { Mass } from './dimension/Mass';
import { Power } from './dimension/Power';
import { Pressure } from './dimension/Pressure';
import { Time } from './dimension/Time';
import { Volume } from './dimension/Volume';
import { Dimension } from './types/Dimension';

// Returns a collection of @type Dimension.
export const Dimensions : Dimension[] = [
	Angle, Current, Data, 
	Energy, Length, Mass, Power, 
	Pressure, Time, Volume,
];