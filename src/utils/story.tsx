import { FlexChild } from '@/flex'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout, Flex, Heading, Link, Text } from '@radix-ui/themes'
import type { ReactElement, ReactNode } from 'react'
import { Markdown } from './markdown'
import css from './story.module.css'

export function Story(props: {
  title: string
  id: string
  canvas: ReactNode
  hint?: ReactNode
  desc: string
}): ReactElement {
  const { title, id, canvas, hint, desc } = props

  const titleNode = (
    <Link href={`#${id}`} color="crimson">
      <Heading as="h2" size="8">
        {title}
      </Heading>
    </Link>
  )

  const secondaryNode = (
    <FlexChild flex={{ initial: "none", sm: 1 }}>
      <Flex direction="column" gap="4">
        <Markdown>{desc}</Markdown>
      </Flex>
    </FlexChild>
  )

  const hintNode = hint && (
    <Callout.Root>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        {hint}
      </Callout.Text>
    </Callout.Root>
  )

  const canvasNode = (
    <Text as="div" size="2" asChild>
      <Flex className={css.canvas} direction="column" gap="4" p="4">
        {canvas}
      </Flex>
    </Text>
  )

  const primaryNode = (
    <FlexChild
      flex={{ initial: "none", sm: 1 }}
      asChild
    >
      <Flex direction="column" gap="4">
        {canvasNode}
        {hint && hintNode}
      </Flex>
    </FlexChild>
  )

  const bodyNode = (
    <Flex
      direction={{
        initial: "column",
        sm: "row-reverse",
      }}
      gap="4"
    >
      {primaryNode}
      {secondaryNode}
    </Flex>
  )

  return (
    <Flex direction="column" gap="4" id={id} maxWidth="960px">
      {titleNode}
      {bodyNode}
    </Flex>
  )
}
