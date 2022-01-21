import { Prefixes } from '../prefix/Prefixes';
import { Prefix, PrefixAlias } from '../types/Prefix';

/** Get a prefix by it's alias. 
 * @param  {T} alias
 * 1. Get all matches for a prefix by filtering @import Prefixes for an alias match.
 * 2. Check if there are any matches.
 * 3. If there are no matches, throw an exception. Otherwise return the prefix. 
 */
export const getPrefix = <T extends PrefixAlias>(alias: T): Prefix => {
	const matches = Prefixes.filter(prefix => 
		[prefix.short, prefix.symbol, prefix.long].includes(alias));
	if(matches.length === 0) throw new Error(`NO_SUCH_PREFIX:${alias}`);
	return matches[0];
};