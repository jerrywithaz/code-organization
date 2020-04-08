import { Location, History } from 'history';
import { parse, ParsedQuery } from 'query-string';

/**
 * Parses the current `location` search query string.
 * @param location The History Location object.
 */
function useSearchParams<Query extends ParsedQuery = {}>(
    location: Location<History.PoorMansUnknown>
): Query {
    return parse(location.search) as Query;
};

export default useSearchParams;