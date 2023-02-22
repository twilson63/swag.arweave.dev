// Svelte Stores
import { writable } from "svelte/store";
import machine from './machine.js'
import { useMachine } from 'svelte-robot-factory'

// const machine = createMachine({
//   loading: invoke(leaderboard,
//     transition('done', 'leaderboard',
//       reduce((ctx, ev) => ({ ...ctx, players: ev.data }))
//     )
//   ),
//   leaderboard: state(
//     transition('show', 'player'),
//     transition('register', 'register')
//   ),
//   player: state(
//     transition('stamp', 'stamp'),
//     transition('reset', 'admin')
//   ),
//   // send('stamp', 'PLAYER_TX_ID') // 2nd arg is the data prop in event
//   stamp: invoke((_, ev) => stamp(ev.data), 
//     transition('done', 'stampResult', 
//       reduce((ctx, ev) => set(lensPath(['player', 'count']), ev.data, ctx)) 
//     ),
//     transition('error', 'stampError')
//   ),
//   stampResult: state(
//     transition('close', 'leaderboard')
//   ),
//   stampError: state(
//     transition('close', 'leaderboard')
//   ),
//   register: state(
//     transition('createPlayer', 'playerConfirmation'),
//     transition('cancel', 'leaderboard')
//   ),
//   playerConfirmation: state(
//     transition('close', 'leaderboard')
//   )


// }, context)

export const robot = useMachine(machine, { })

interface User {
  profile?: {
    id?: string;
    address: string;
    handle: string;
    avatar: string;
    bio: string;
  };
}
export const user = writable({} as User);
