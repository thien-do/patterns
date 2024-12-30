import { Flex, FlexProps } from "@radix-ui/themes";
import { ReactElement } from "react";

export function ExampleBox(props: FlexProps & {
  maxWidth?: "240px"
}): ReactElement {
  const { maxWidth, ...rest } = props

  return (
    <Flex
      maxWidth={maxWidth}
      direction="column"
      gap="4"
      {...rest}
    />
  )
}