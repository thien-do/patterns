import { Box, Flex, Text } from '@radix-ui/themes'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { FieldBlock } from './field/block'
import { FieldInline } from './field/inline'
import { TextField } from './text-field'
import { Story } from './utils/story'

export function SizePointerStory() {
  const canvas = (
    <Box maxWidth="240px" asChild>
      <Flex direction="column" gap="4">
        <FieldBlock label="Store name">
          <TextField.Root />
        </FieldBlock>
        <FieldInline label="Official store">
          <Checkbox />
        </FieldInline>
        <Button>Create store</Button>
      </Flex>
    </Box>
  )

  const hint = `
Open the Device Toolbar to see the components become bigger in touch devices.
`

  const desc = `
**The size of interactive components changes
based on the [primary pointer][].**
For example, \`<Button />\` and \`<TextField />\` will be larger
when the user's pointer is "coarse",
such as a finger on a touchscreen.

[primary pointer]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer

This does not only make it easier to interact with the components,
but also prevents the [auto zooming][] of Safari on iOS devices.

[auto zooming]: https://css-tricks.com/16px-or-larger-text-prevents-ios-form-zoom/
`.trim()

  return (
    <Story
      id="size-pointer"
      title="Size pointer"
      desc={desc}
      canvas={canvas}
      hint={hint}
    />
  )
}
