import type { ReactElement, ReactNode } from 'react'
import { Flex, Heading, Link, Separator, Text } from '@radix-ui/themes'
import { Markdown } from './markdown'

export function Story(props: {
  title: string
  id: string
  canvas: ReactNode
  desc: string
}): ReactElement {
  const { title, id, canvas, desc } = props

  return (
    <Flex direction="column" gap="4" id={id}>
      <Link href={`#${id}`} color="crimson">
        <Heading as="h2" size="8">
          {title}
        </Heading>
      </Link>
      <Separator size="4" />
      <Text as="div" size="2" asChild>
        <Flex direction="column" gap="4">
          {canvas}
        </Flex>
      </Text>
      <Separator size="4" />
      <Markdown>{desc}</Markdown>
    </Flex>
  )
}
