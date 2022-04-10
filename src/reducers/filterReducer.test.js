import store from '../store'
import deepFreeze from 'deep-freeze'
import { updateId, reset, updateCode, clearId, clearCode } from './filterReducer'

test('state init to null', () => {
  const { filter:{ id, code} } = store.getState()
  expect(id).toBeNull()
  expect(code).toBeNull()
})

describe('filter reducer', () => {
  let state
  beforeEach(() => {
    store.dispatch(reset())
    state = store.getState()
  })

  test('update id', () => {
    deepFreeze(state)
    store.dispatch(updateId(1))

    const { filter:newFilter } = store.getState()
    expect(newFilter.id).toBe(1)
  })

  test('update code', () => {
    deepFreeze(state)
    store.dispatch(updateCode('ABC'))

    const { filter: newFilter } = store.getState()
    expect(newFilter.code).toBe('ABC')
  })

  test('clear code', () => {
    store.dispatch(updateCode('ABC'))
    const { filter: { code }} = store.getState()
    expect(code).toBe('ABC')

    store.dispatch(clearCode())
    const { filter: { code:newCode }} = store.getState()
    expect(newCode).toBeNull()
  })

  test ('clear id', () => {
    store.dispatch(updateId(12))
    const { filter: { id }} = store.getState()
    expect(id).toBe(12)

    store.dispatch(clearId())
    const { filter: { id:newId }} = store.getState()
    expect(newId).toBeNull()
  })
})