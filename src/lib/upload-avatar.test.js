import { assert } from 'asserts'
import { uploadAvatar } from './upload-avatar.js'

const { test } = Deno

function dispatch() {
  return Async.Resolved({  id: '1234'  })
}

test('uploadAvatar', async () => {
  const file = new File(['Hello World'], 'foo.txt', { type: 'text/plain'})
  const result = await uploadAvatar(file, file.type).runWith({dispatch}).toPromise()
  assert(result.id === '1234')
})