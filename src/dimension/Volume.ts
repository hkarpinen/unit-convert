import { Dimension } from '../types/Dimension';

export const Volume : Dimension = {
	key: 'volume',
	units: [
		{ short: 'L', singular: 'liter', plural: 'liters', ratio: 1 },
		{ short: 'us-tsp', singular: 'us-teaspoon', plural: 'us-teaspoons', ratio: 202.8841 },
		{ short: 'us-tbsp', singular: 'us-tablespoon', plural: 'us-tablespoons', ratio: 67.62805 },
		{ short: 'us-floz', singular: 'us-fluid-ounce', ratio: 33.81402 },
		{ singular: 'us-cup', plural: 'us-cups', ratio: 4.226753 },
		{ short: 'us-pt', singular: 'us-pint', plural: 'us-pints', ratio: 2.113376 },
		{ short: 'us-qt', singular: 'us-quart', plural: 'us-quarts', ratio: 1.056688 },
		{ short: 'us-gal', singular: 'us-gallon', plural: 'us-gallons', ratio: 0.264172 },
		{ short: 'uk-tsp', singular: 'uk-teaspoon', plural: 'uk-teaspoons', ratio: 168.9364 },
		{ short: 'uk-tbsp', singular: 'uk-tablespoon', plural: 'uk-tablespoons', ratio: 56.31213 },
		{ short: 'uk-floz', singular: 'uk-fluid-ounce', ratio: 35.19508 },
		{ short: 'uk-pt', singular: 'uk-pint', plural: 'uk-pints', ratio: 1.759754 },
		{ short: 'uk-qt', singular: 'uk-quart', plural: 'uk-quarts', ratio: 0.879877 },
		{ short: 'uk-gal', singular: 'uk-gallon', plural: 'uk-gallons', ratio: 0.219969 }
	]
};