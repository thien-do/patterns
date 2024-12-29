import { ReactElement } from 'react'
import { Checkbox } from '../checkbox'
import { TextField } from '../text-field'
import { Story } from '../utils/story'
import { FieldBlock } from './block'
import { FieldInline } from './inline'

export function FieldLabelStory(): ReactElement {
  const canvas = (
    <>
      <FieldBlock label="Block field">
        <TextField.Root />
      </FieldBlock>
      <FieldInline label="Inline field">
        <Checkbox />
      </FieldInline>
    </>
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
      id="field-label"
      title="Field label"
      canvas={canvas}
      desc={desc}
    />
  )
}
