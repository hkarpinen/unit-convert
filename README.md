# unit-convert
A simple SI unit conversion library. 

# Installation
`npm i kuolintoive-units`

### Usage

##### Simple Unit Conversion
This example converts 10 feet to yards.
```javascript
import { convertSimpleUnits } from 'kuolintoive-units';
var conversion = convertSimpleUnits('ft', 'yard', 10);
```

##### Complex Unit Conversion
This example converts 10 gigabits to megabytes.
- Note that the key must match a unit name from the Units (by Dimension) section
of this read me.
- Note that they prefix must match a prefix alias from the Prefixes section 
of this read me. 

```javascript
import { convertComplexUnits } from 'kuolintoive-units';
var conversion = convertComplexUnits(
    { key: 'bit', prefix: 'giga' },
    { key: 'bytes', prefix: 'mega' },
    10
);
```

##### Simple Unit Rate Conversion
This example converts 10 feet/second to yards/minute.
```javascript
import { convertSimpleUnitRate } from 'kuolintoive-units';
let rate = convertSimpleUnitRate(
	{ baseUnit: 'ft', rateUnit: 's' },
	{ baseUnit: 'yd', rateUnit: 'm' },
	10
);
```

### SI Prefixes
Below is a table of all SI prefixes. Note that the base one (no prefix)
does not have a symbol or long name.

| Short | Long | Symbol | Factor
|-------------|-------------|-----|----|
| `yotta` | `Septillion` | `Y` | `24` |
| `zetta` | `Sextillion` | `Z` | `21` |
| `exa` | `Quintillion` | `E` | `18` |
| `peta` | `Quadrillion` | `P` | `15` |
| `tera` | `Trillion` | `T` | `12` |
| `giga` | `Billion` | `G` | `9` |
| `mega` | `Million` | `M` | `6` |
| `kilo` | `Thousand` | `k` | `3` |
| `hecto` | `Hundred` | `h` | `2` |
| `deka` | `Ten` | `da` | `1` |
| `one` | | | |
| `deci` | `Tenth` | `d` | `-1` |
| `centi` | `Hundredth` | `c` | `-2` |
| `milli` | `Thousandth` | `m` | `-3` |
| `micro` | `Millionth` | `m` | `-6` |
| `nano` | `Billionth` | `n` | `-9` |
| `pico` | `Trillionth` | `p` | `-12` |
| `femto` | `Quadrillionth` | `f` | `-15` |
| `atto` | `Quintillionth` | `a` | `-18` |
| `zepto` | `Sextillionth` | `z` | `-21` |
| `yocto` | `Septillionth` | `y` | `-24` |

### Units (By Dimension)
##### Angle 
| Short | Singular | Plural |
|-------|----------|--------|
| `d` | `degree` | `degrees` |
| `r` | `radian` | `radians` |
| `g` | `gradian` | `gradians` |

##### Current
| Short | Singular | Plural |
|-------|----------|--------|
| `A` | `amp` | `ampere` |
| `b` | `biot` | `biots` |

##### Charge
| Short | Singular | Plural |
|-------|----------|--------|
| `C` | `coulumb` |  |
| | `emu-of-charge` | |
| | `esu-of-charge` | |
| `Fr` | `franklin` | |
| `e` | `elementary-charge` | |


##### Data
| Short | Singular | Plural |
|-------|----------|--------|
| | `bit` | `bits` |
| | `byte` | `bytes` |

##### Energy
| Short | Singular | Plural |
|-------|----------|--------|
| `btu` | `british-thermal-unit` | `british-thermal-units` |
| `eV` | `electron-volt` | `electron-volts` |
| `J` | `joule` | `joules`
| | `thermal-calorie` | `thermal-calories` |
| | `food-calorie` | `food-calories` |
| `ft-lb` | `foot-pound` | `foot-pounds` |

##### Illuminance
| Short | Singular | Plural |
|-------|----------|--------|
| `lx` | `lux` | |
| `mc` | `meter-candle` | |
| `fc` | `foot-candle` | |
| | `flame` | |
| `ph` | `phot` | |
| | `nox` | |

##### Inductance
| Short | Singular | Plural |
|-------|----------|--------|
| `H` | `henry` | |

##### Length
| Short | Singular | Plural |
|-------|----------|--------|
| `nm` | `nautical-mile` | `nautical-miles` |
| `mi` | `mile` | `miles` |
| `yd` | `yard` | `yards` |
| `ft` | `foot` | `feet` |
| `in` | `inch` | `inches` |
| `m` | `meter` | `meters` |

##### Mass
| Short | Singular | Plural |
|-------|----------|--------|
| | `short-ton` | `short-tons` |
| | `long-ton` | `long-tons` |
| | `metric-ton` | `metric-tonnes` |
| | `stone` | `stones` |
| `lb` | `pound` | `pounds` |
| `oz` | `ounce` | `ounces` |
| `g` | `gram` | `grams` |
| | `carat` | `carats` |

##### Power
| Short | Singular | Plural |
|-------|----------|--------|
| `W` | `watt` | `watts` |
| `hp` | `horsepower` | |

##### Pressure
| Short | Singular | Plural |
|-------|----------|--------|
| `atm` | `atmosphere` | `atmospheres` |
| | `bar` | `bars` |

##### Time
| Short | Singular | Plural |
|-------|----------|--------|
| `s` | `second` | `seconds` |
| `m` | `minute` | `minutes` |
| `h` | `hour` | `hours` |
| `d` | `day` | `days` |
| `wk` | `week`  | `weeks` |
| `yr` | `year` | `years` |


##### Volume
| Short | Singular | Plural |
|-------|----------|--------|
| `L` | `liter` | `liters` |
| `us-tsp` | `us-teaspoon` | `us-teaspoons` |
| `us-tbsp` | `us-tablespoon` | `us-tablespoons` |
| `us-floz` | `us-fluid-ounce` | |
| | `us-cup` | `us-cups` |
| `us-pt` | `us-pint` | `us-pints` |
| `us-qt` | `us-quart` | `us-quarts` |
| `us-gal` | `us-gallon` | `us-gallons` |
| `uk-tsp` | `uk-teaspoon` | `uk-teaspoons` |
| `uk-tbsp` | `uk-tablespoon` | `uk-tablespoons` |
| `uk-floz` | `uk-fluid-ounce` | |
| `uk-pt` | `uk-pint` | `uk-pints` |
| `uk-qt` | `uk-quart` | `uk-quartz` |
| `uk-gal` | `uk-gallon` | `uk-gallons` |




