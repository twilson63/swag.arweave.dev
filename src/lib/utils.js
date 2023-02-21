import crocks from "crocks";
export const { Async, ReaderT } = crocks;

/**
 * @callback ToPromise
 * @returns {Promise<unknown>}
 */
/**
 * @typedef {Object} Async
 * @property {ToPromise} toPromise
 */
/**
 * @callback RunWith
 * @param {any} svc
 * @returns {Async}
 */
/**
 * @typedef {Object} AsyncReader
 * @property {RunWith} runWith
 */

export const AsyncReader = ReaderT(Async);
