const functions = {register, approve, slash, reset, evolve, setAdmin}


/**
 * @typedef {Object} State
 * @property {Record<string, {code: string, address: string, token: string, active: boolean, admin: boolean}>[]} players
 * @property {string} name
 * @property {string} creator
 * @property {boolean} canEvolve
 * @property {string} [evolve]
 * 
 */

export async function handle(state, action) {
  if(Object.keys(functions).includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }
  throw new ContractError(`${action.input.function} function not implemented!`)
}


/**
 * @param {State} state
 * @param {{input: {code: string, token: string}, caller: string}} action
 */
async function register(state, action) {
  ContractAssert(action.input.code, 'QR Code is Required!')
  ContractAssert(action.input.token && action.input.token.length === 43, 'Player Token Contract Id is required!')
  ContractAssert(action.caller && action.caller.length === 43, 'caller is invalid')
  
  const code = action.input.code
  const address = action.caller
  const token = action.input.token
  
  if (state.players[code]) {
    throw new ContractError('Player already registered!')
  }

  //TODO: readContractState of token to verify the contract is valid

  state.players[code] = {
    address,
    token,
    admin: false,
    active: false,
    code
  }
  return { state }
}

/**
 * @param {State} state
 * @param {{input: {code: string}, caller: string}} action
 */
function slash(state, action) {
  ContractAssert(action.input.code, 'QR Code is Required!')
  ContractAssert(action.caller && action.caller.length === 43, 'caller is invalid!')
  
  // if caller is admin then allow slash
  if (Object.values(state.players).find(propEq('address', action.caller)).admin) {
    delete state.players[code]
  }
  
  // if caller is creator then allow slash
  if (action.caller === state.creator) {
    delete state.players[code]
  }

  return { state }
}

/**
 * @param {State} state
 * @param {{caller: string, input: {name: string}}} action
 */
function reset(state, action) {
  ContractAssert(action.input.name, 'Name is Required!')
  ContractAssert(action.caller && action.caller.length === 43, 'caller is invalid!')

  if (state.creator === action.caller) {
    state.players = {}
    state.name = action.input.name
  }

}

/**
 * @param {State} state
 * @param {{caller: string, input: {token: string, address: string}}} action
 */
function approve(state, action) {
  ContractAssert(action.input.token, 'Player Token is Required!')
  ContractAssert(action.input.address, 'Player Address is Required!')
  ContractAssert(action.caller && action.caller.length === 43, 'caller is invalid!')
  
  const isAdmin = Object.values(state.players).find(propEq('address', action.caller)).admin
  const player = Object.values(state.players).find(p => p.address === action.input.address && p.token === action.input.token)

  if (isAdmin && player) {
   state.players[player.code] = {...player, active: true}
  }

  return { state }

}

/**
 * @param {State} state
 * @param {{caller: string, input: { value: string}}}
 */
function evolve(state, action) {
  ContractAssert(action.input.value, 'Contract-Src value is Required!')
  if(state.canEvolve) {
    if (state.creator === action.caller) {
      state.evolve = action.input.value
    }
  }
  return { state }
}


/**
 * @param {State} state
 * @param {{caller: string, input: {token: string, address: string}}} action
 */
function setAdmin(state, action) {
  ContractAssert(action.input.token, 'Player Token is Required!')
  ContractAssert(action.input.address, 'Player Address is Required!')
  ContractAssert(action.caller && action.caller.length === 43, 'caller is invalid!')

  const isAdmin = Object.values(state.players).find(propEq('address', action.caller)).admin
  const player = Object.values(state.players).find(p => p.address === action.input.address && p.token === action.input.token)

  if (isAdmin && player) {
   state.players[player.code] = {...player, admin: true}
  }

  return { state }

}