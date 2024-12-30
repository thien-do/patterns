import type { ReactElement } from 'react'
import { Box, Flex, Heading, Link } from '@radix-ui/themes'
import { FieldLabelStory } from '@/kit/field/story'
import { FlexChildStory } from '@/kit/flex.story'
import { BackgroundStory } from '@/kit/background.story'
import { SizePointerStory } from '@/kit/size.story'

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
      <BackgroundStory />
      <FlexChildStory />
      <SizePointerStory />
      <FieldLabelStory />
    </Flex>
  )
}