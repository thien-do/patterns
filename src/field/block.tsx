import type { ReactElement, ReactNode } from 'react'
import { Flex, Text } from '@radix-ui/themes'

export function FieldBlock(props: {
  label: ReactNode
  children: ReactNode
}): ReactElement {
  const { label, children } = props

  return (
    <Flex direction="column" gap="2" asChild>
      <label>
        <Text as="div" weight="medium">
          {label}
        </Text>
        {children}
      </label>
    </Flex>
  )
}
