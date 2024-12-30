import { Breakpoint, breakpoints, Responsive } from "@radix-ui/themes/props"

export function getResponsive<From, To>(params: {
  from: Responsive<From>,
  is: (prev: unknown) => prev is From,
  get: (prev: From) => To
}): Responsive<To> {
  const { from, is, get } = params

  if (is(from)) return get(from)

  type Entry = [Breakpoint, To | undefined]
  const entries: Array<Entry> = breakpoints.map(key => {
    const value = from[key]
    if (value === undefined) return [key, undefined]
    return [key, get(value)]
  })

  const to = Object.fromEntries(entries)
  return to
}
