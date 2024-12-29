import { Flex, Text } from '@radix-ui/themes'
import { Story } from './utils/story'
import { FlexChild } from './flex'

export function FlexChildStory() {
  const canvas = (
    <>
      <Text as="div" color="gray">
        Resize your window to see the "Bar" child
        being truncated without overflowing:
      </Text>
      <Flex direction="row" gap="4">
        <FlexChild flex="none">Foo</FlexChild>
        <FlexChild flex="grow">
          <Text truncate as="div">
            {Array.from({ length: 100 }).fill('Bar').join(' ')}
          </Text>
        </FlexChild>
        <FlexChild flex="none">Baz</FlexChild>
      </Flex>
    </>
  )

  const desc = `
**Use \`<FlexChild />\` when a flex container has [extrinsic size][].**
Due to [CSS flow layout][],
this often means when the flex container's direction is \`"row"\`.
It's also true when the flex container has a fixed height
while its direction is \`"column"\`.

[extrinsic size]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing#setting_a_specific_size
[CSS flow layout]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout

\`<FlexChild />\` prevents [common overflow issues][].
Its \`"flex"\` prop is also more reliable than the default
[keyword expansion][].

[keyword expansion]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex#syntax
[common overflow issues]: https://css-tricks.com/flexbox-truncated-text/
`.trim()

  return (
    <Story
      id="flex-child"
      title="Flex child"
      desc={desc}
      canvas={canvas}
    />
  )
}
