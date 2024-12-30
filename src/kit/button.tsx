'use client'

import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Button as RadixButton } from '@radix-ui/themes'
import { useSizePointer } from './size'

export function Button(
  props: RadixButtonProps,
): ReactElement {
  const size = useSizePointer()

  return (
    <RadixButton
      size={size}
      {...props}
    />
  )
}
