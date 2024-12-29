"use client"

import type { CheckboxProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Checkbox as RadixCheckbox } from '@radix-ui/themes'
import { useSizePointer } from './size'

export function Checkbox(
  props: CheckboxProps,
): ReactElement {
  const size = useSizePointer()

  return (
    <RadixCheckbox
      variant="soft"
      size={size}
      {...props}
    />
  )
}
