import type { ReactElement } from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import { FieldStory } from '../field/story'
import { FlexChildStory } from '../flex.story'
import { SizePointerStory } from '../size.story'

export function AppPage(): ReactElement {
  return (
    <Flex
      direction="column"
      gap="9"
      p="4"
      maxWidth="480px"
    >
      <Heading as="h1" wrap="pretty">
        Potentially useful patterns in user interfaces
      </Heading>
      <FlexChildStory />
      <FieldStory />
      <SizePointerStory />
    </Flex>
  )
}