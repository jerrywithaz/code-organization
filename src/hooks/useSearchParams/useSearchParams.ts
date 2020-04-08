import { Location, History } from 'history';
import { parse, ParsedQuery } from 'query-string';
import { useState } from 'react';

/**
 * Parses the current `location` search query string.
 * @param location The History Location object.
 */
function useSearchParams<Query extends ParsedQuery = {}>(
    location: Location<History.PoorMansUnknown>
): Query {

    const parsedQuery = parse(location.search) as Query;

    const [ searchParams ] = useState<Query>(parsedQuery);

    return searchParams;

};

export default useSearchParams;