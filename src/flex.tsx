import type { BoxProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Box } from '@radix-ui/themes'
import { Breakpoint, breakpoints, Responsive } from '@radix-ui/themes/props'
import { z } from 'zod'
import { getResponsive } from './responsive'

const valueSchema = z.union([
  z.literal('none'),
  z.literal('initial'),
  z.number(),
])

type Value = z.infer<typeof valueSchema>

function isValue(value: unknown): value is Value {
  return valueSchema.safeParse(value).success
}

function getGrow(value: Value): string {
  return typeof value === 'number' ? `${value}` : '0'
}

function getShrink(value: Value): string {
  return value !== 'none' ? '1' : '0'
}

function getBasis(value: Value): string {
  return typeof value === 'number' ? '0' : 'auto'
}

function getSize(value: Value): string | undefined {
  const shrink = getShrink(value)
  return shrink === '1' ? '0px' : undefined
}

export function FlexChild(props: BoxProps & {
  flex: Responsive<'none' | 'initial' | number>
}): ReactElement {
  const { flex, ...box1 } = props

  const box2: BoxProps = box1

  // Ensure that all 3 flex properties are set.
  // This is more reliable than relying on
  // the default keyword expansion behaviour.
  //
  // This is also useful to address the "overflow" issue, see below.
  //
  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/CSS/flex#syntax
  const [is, from] = [isValue, flex]
  box2.flexGrow = getResponsive({ from, is, get: getGrow })
  box2.flexShrink = getResponsive({ from, is, get: getShrink })
  box2.flexBasis = getResponsive({ from, is, get: getBasis })

  // The overflow issue: by default,
  // flex child does not shrink to zero,
  // even if its basis is "auto".
  // Instead, it only shrinks to min-content.
  // These "min" properties ensure it will shrink to zero.
  //
  // See:
  // - https://css-tricks.com/flexbox-truncated-text/
  box2.minWidth = getResponsive({ from, is, get: getSize })
  box2.minHeight = getResponsive({ from, is, get: getSize })

  return <Box {...box2} />
}
