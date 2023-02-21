import { AsyncReader } from './utils.js'

const { of, ask, lift } = AsyncReader 

/**
 * @param {Profile} profile
 * 
 * @returns { AsyncReader }
 */
export function createProfile(profile) {
  return of(profile)
    .chain(f => ask(({dispatch}) => 
      dispatch({data: JSON.stringify(profile), tags: [{name: 'Protocol-Name', value: 'Account-0.3'}]})
    ))
    .chain(lift)
  // check if file is < 100kb
  // dispatch
  return of({ok: true})
}