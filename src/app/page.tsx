import type { ReactElement } from 'react'
import { Box, Flex, Heading, Link } from '@radix-ui/themes'
import { FieldStory } from '../field/story'
import { FlexChildStory } from '../flex.story'
import { SizePointerStory } from '../size.story'

export function AppPage(): ReactElement {
  return (
    <Flex
      direction="column"
      gap="9"
      p="4"
    >
      <Box>
        <Heading as="h1" wrap="pretty">
          Potentially useful patterns in user interfaces
        </Heading>
        <Link
          color="crimson"
          href="https://github.com/thien-do/patterns"
        >
          github.com/thien-do/patterns
        </Link>
      </Box>
      <FlexChildStory />
      <SizePointerStory />
      <FieldStory />
    </Flex>
  )
}