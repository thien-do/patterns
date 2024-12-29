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
Hello
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
