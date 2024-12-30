'use client'

import type { ReactElement } from 'react'
import { useSizePointer } from '@/kit/size'
import { TextField as RadixTextField } from '@radix-ui/themes'

export function TextFieldRoot(props: RadixTextField.RootProps): ReactElement {
  const { ...rest } = props

  const size = useSizePointer()

  return (
    <RadixTextField.Root
      variant="soft"
      size={size}
      {...rest}
    />
  )
}
