import type { ReactElement } from 'react'
import { BackgroundStory } from '@/kit/background.story'
import { FieldLabelStory } from '@/kit/field/story'
import { FlexChildStory } from '@/kit/flex.story'
import { SizePointerStory } from '@/kit/size.story'
import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { AppTitle } from './title'

export function AppPage(): ReactElement {
  return (
    <Flex
      direction="column"
      gap="9"
      p="4"
    >
      <AppTitle />
      <FlexChildStory />
      <FieldLabelStory />
      <SizePointerStory />
      <BackgroundStory />
    </Flex>
  )
}
