import type { BoxProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Box } from '@radix-ui/themes'

export function FlexChild(props: BoxProps & {
  flex: 'none' | 'grow' | 'initial'
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
  switch (flex) {
    case 'none':
      box2.flexGrow = '0'
      box2.flexShrink = '0'
      box2.flexBasis = 'auto'
      break
    case 'grow':
      box2.flexGrow = '1'
      box2.flexShrink = '1'
      box2.flexBasis = '0'
      break
    case 'initial':
      box2.flexGrow = '0'
      box2.flexShrink = '1'
      box2.flexBasis = 'auto'
      break
  }

  // The overflow issue: by default,
  // flex child does not shrink to zero,
  // even if its basis is "auto".
  // Instead, it only shrinks to min-content.
  // These "min" properties ensure it will shrink to zero.
  //
  // See:
  // - https://css-tricks.com/flexbox-truncated-text/
  if (box1.flexShrink === '1') {
    box2.minWidth = '0px'
    box2.minHeight = '0px'
  }

  return <Box {...box2} />
}
