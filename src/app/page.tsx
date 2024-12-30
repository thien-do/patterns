import type { ReactElement } from 'react'
import { BackgroundStory } from '@/kit/background.story'
import { FieldLabelStory } from '@/kit/field/story'
import { FlexChildStory } from '@/kit/flex.story'
import { SizePointerStory } from '@/kit/size.story'
import { Flex } from '@radix-ui/themes'
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
