import type { PaneProps } from '@/kit/pane'
import type { ReactElement, ReactNode } from 'react'
import { FlexChild } from '@/kit/flex'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { Markdown } from './markdown'
import css from './story.module.css'

interface Canvas {
  node: ReactNode
  pane?: PaneProps
}

export function Story(props: {
  title: string
  canvas: ReactNode | Canvas[]
  hint?: ReactNode
  desc: string
}): ReactElement {
  const { title, canvas, hint, desc } = props

  const id = title.toLowerCase().replaceAll(' ', '-')

  const titleNode = (
    <Link href={`#${id}`} color="crimson">
      <Heading as="h2" size="8">
        {title}
      </Heading>
    </Link>
  )

  const secondaryNode = (
    <FlexChild flex={{ initial: 'none', sm: 1 }}>
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

  const canvases: Canvas[]
    = Array.isArray(canvas) ? canvas : [{ node: canvas }]
  const canvasNode = (
    <Text as="div" size="2" asChild>
      <Flex direction="column" gap="4">
        {canvases.map((canvas, index) => (
          <Flex
            key={index}
            className={css.canvas}
            direction="column"
            gap="4"
            p="4"
          >
            {canvas.node}
          </Flex>
        ))}
      </Flex>
    </Text>
  )

  const primaryNode = (
    <FlexChild
      flex={{ initial: 'none', sm: 1 }}
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
        initial: 'column',
        sm: 'row-reverse',
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
