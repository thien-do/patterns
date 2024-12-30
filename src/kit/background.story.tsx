import type { ReactElement } from 'react'
import { ExampleBox } from '@/example/box'
import { ExampleFormBody } from '@/example/form'
import { Story } from '../utils/story'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { FieldBlock } from './field/block'
import { FieldInline } from './field/inline'
import { Pane } from './pane'
import { TextField } from './text-field'

function AdvancedExample(): ReactElement {
  return (
    <ExampleBox maxWidth="240px" asChild>
      <Pane background="2" shadow="2" radius="3" p="4">
        <FieldBlock label="Store name">
          <TextField.Root variant="classic" />
        </FieldBlock>
        <FieldInline label="Official store">
          <Checkbox variant="classic" />
        </FieldInline>
        <Pane background="0" shadow="2" asChild>
          <Button variant="soft">Create store</Button>
        </Pane>
      </Pane>
    </ExampleBox>
  )
}

export function BackgroundStory(): ReactElement {
  const simple = (
    <ExampleBox maxWidth="240px" asChild>
      <Pane background="0" shadow="2" radius="3" p="4">
        <ExampleFormBody />
      </Pane>
    </ExampleBox>
  )

  const advanced = <AdvancedExample />

  const hint = `
Switch to Light appearance to see the differences better.
`

  const desc = `
**Most apps have 3 layers of surfaces.**
The base layer is the app _"background"_,
which is behind everything.
Above the background, there are several _"panes"_,
that help users to understand the app structure.
The top layer is the many _"controls"_ on the panes,
that users interact with to use the app.

**A simple approach is for the panes to be front most.**
For example, in Light appearance, they will be pure \`white\`.
The app background is then dimmed to \`gray-2\`
to make the panes look elevated.
Meanwhile, the controls are pushed a bit further to \`gray-3\`,
making them look sunken as users can fill in most of them.

**An advanced approach is for the controls to be front most.**
We can then use shadows
to sunk the input controls (such as text fields)
and raise the action controls (such as buttons),
which is not available in the simple approach.
The panes are then dimmed instead to \`gray-2\`,
while the background is pushed further to \`gray-3\`.
`

  return (
    <Story
      title="Background"
      canvas={[
        { node: simple, pane: { background: '2' } },
        { node: advanced, pane: { background: '3' } },
      ]}
      hint={hint}
      desc={desc}
    />
  )
}
