import type { ReactElement } from 'react'
import type { Components, Options } from 'react-markdown'
import { Code, Link, Strong, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'

function filter(props: any): any {
  const { node, ...rest } = props
  return rest
}

const components: Components = {
  strong: props => <Strong {...filter(props)} />,
  p: props => <Text as="p" {...filter(props)} />,
  code: props => <Code {...filter(props)} />,
  a: props => <Link underline="always" {...filter(props)} />,
}

export function Markdown(props: Options): ReactElement {
  return (
    <ReactMarkdown
      components={components}
      {...props}
    />
  )
}
