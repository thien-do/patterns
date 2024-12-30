import { FieldBlock } from "@/kit/field/block";
import { FieldInline } from "@/kit/field/inline";
import { TextField } from "@/kit/text-field";
import { Checkbox } from "@/kit/checkbox";
import { ReactElement } from "react";
import { Button } from "@/kit/button";

export function ExampleFormFields(): ReactElement {
  return (
    <>
      <FieldBlock label="Store name">
        <TextField.Root />
      </FieldBlock>
      <FieldInline label="Official store">
        <Checkbox />
      </FieldInline>
    </>
  )
}

export function ExampleFormBody(): ReactElement {
  return (
    <>
      <ExampleFormFields />
      <Button>Create store</Button>
    </>
  )
}