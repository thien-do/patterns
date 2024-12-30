import { ExampleBox } from "@/example/box";
import { ExampleFormBody } from "@/example/form";
import { ReactElement } from "react";
import { Story } from "../utils/story";
import { Card } from "./card";
import { FieldInline } from "./field/inline";
import { FieldBlock } from "./field/block";
import { TextField } from "./text-field";
import { Checkbox } from "./checkbox";

export function BackgroundStory(): ReactElement {
  const canvas = (
    <>
      <Card background="3" p="4">
        <ExampleBox maxWidth="240px" asChild>
          <Card background="0" shadow="2" radius="3" p="4">
            <ExampleFormBody />
          </Card>
        </ExampleBox>
      </Card>
      <ExampleBox maxWidth="240px" asChild>
        <Card background="1" shadow="2" radius="3" p="4">
          <FieldBlock label="Store name">
            <TextField.Root variant="classic" />
          </FieldBlock>
          <FieldInline label="Official store">
            <Checkbox variant="classic" />
          </FieldInline>
        </Card>
      </ExampleBox>
    </>
  )

  const desc = `
**Alternate backgrounds to reflect visual hierarchy.**

`

  return (
    <Story
      title="Background"
      canvas={canvas}
      desc={desc}
    />
  )
}