import { Checkbox } from '../checkbox'
import { TextField } from '../text-field'
import { Story } from '../utils/story'
import { FieldBlock } from './block'
import { FieldInline } from './inline'

export function FieldStory() {
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
don't come with labels by design.
`

  return (
    <Story
      id="field"
      title="Field"
      canvas={canvas}
      desc={desc}
    />
  )
}
