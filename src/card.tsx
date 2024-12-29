import type { CardProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Card as RadixCard } from '@radix-ui/themes'

export function Card(
  props: CardProps,
): ReactElement {
  return (
    <RadixCard
      variant="surface"
      {...props}
    />
  )
}
