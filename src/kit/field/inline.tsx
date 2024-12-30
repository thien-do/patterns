'use client'

import type { ReactElement, ReactNode } from 'react'
import { useSizePointer } from '@/kit/size'
import { Flex } from '@radix-ui/themes'

export function FieldInline(props: {
  label: ReactNode
  children: ReactNode
}): ReactElement {
  const { label, children } = props

  const size = useSizePointer()

  return (
    <Flex
      direction="row"
      gap={size}
      asChild
      align="center"
    >
      <label>
        {children}
        {label}
      </label>
    </Flex>
  )
}
