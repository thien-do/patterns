import type { FlexProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Flex } from '@radix-ui/themes'

export function ExampleBox(props: FlexProps & {
  maxWidth?: '240px'
}): ReactElement {
  const { maxWidth, ...rest } = props

  return (
    <Flex
      maxWidth={maxWidth}
      direction="column"
      gap="4"
      {...rest}
    />
  )
}
