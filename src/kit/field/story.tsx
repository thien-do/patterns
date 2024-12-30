import type { ReactElement } from 'react'
import { ExampleBox } from '@/example/box'
import { ExampleFormFields } from '@/example/form'
import { Story } from '../../utils/story'

export function FieldLabelStory(): ReactElement {
  const canvas = (
    <ExampleBox maxWidth="240px">
      <ExampleFormFields />
    </ExampleBox>
  )

  const desc = `
**Use \`<FieldBlock />\` and \`<FieldInline />\`
to provide explicit labels.**
They both nest the input inside the label,
so there's no need for an explicit \`id\` prop.

Input components such as \`<TextField />\` and \`<Checkbox />\`
don't come with explicit labels by design.
Depend on the situation, they can have [implicit labels],
for example via \`aria-label\` or \`aria-labelledby\`.

[implicit labels]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
`

  return (
    <Story
      title="Field label"
      canvas={canvas}
      desc={desc}
    />
  )
}
