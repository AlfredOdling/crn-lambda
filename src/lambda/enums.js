// NetworkStatus

/**
 * The query has never been run before and the query is now currently running. A query will still
 * have this network status even if a partial data result was returned from the cache, but a
 * query was dispatched anyway.
 */
export const loading = 1

/**
 * If `setVariables` was called and a query was fired because of that then the network status
 * will be `setVariables` until the result of that query comes back.
 */
export const setVariables = 2

/**
 * Indicates that `fetchMore` was called on this query and that the query created is currently in
 * flight.
 */
export const fetchMore = 3

/**
 * Similar to the `setVariables` network status. It means that `refetch` was called on a query
 * and the refetch request is currently in flight.
 */
export const refetch = 4

/**
 * Indicates that a polling query is currently in flight. So for example if you are polling a
 * query every 10 seconds then the network status will switch to `poll` every 10 seconds whenever
 * a poll request has been sent but not resolved.
 */
export const poll = 6

/**
 * No request is in flight for this query, and no errors happened. Everything is OK.
 */
export const ready = 7

/**
 * No request is in flight for this query, but one or more errors were detected.
 */
export const error = 8
