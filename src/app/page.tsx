import type { ReactElement } from 'react'
import { BackgroundStory } from '@/kit/background.story'
import { FieldLabelStory } from '@/kit/field/story'
import { FlexChildStory } from '@/kit/flex.story'
import { SizePointerStory } from '@/kit/size.story'
import { Box, Flex, Heading, Link } from '@radix-ui/themes'

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
