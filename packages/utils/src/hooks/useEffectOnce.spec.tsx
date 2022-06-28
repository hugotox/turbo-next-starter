import { renderHook } from '@testing-library/react'

import { useEffectOnce } from './useEffectOnce'

describe('useEffectOnce', () => {
  it('works', () => {
    const callback = jest.fn()
    const { rerender } = renderHook(() => useEffectOnce(callback))
    rerender()
    expect(callback).toHaveBeenCalledTimes(1)
  })
  it('works with cleanup', () => {
    const args = {
      callback: () => {
        return jest.fn()
      },
    }
    const spy = jest.spyOn(args, 'callback')
    const { rerender } = renderHook(() => useEffectOnce(args.callback))
    rerender()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
