import type { ReactElement } from 'react'
import type { Components, Options } from 'react-markdown'
import { Code, Link, Strong, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'

const components: Components = {
  strong: props => <Strong {...props} />,
  p: props => <Text {...props} />,
  code: props => <Code {...props} />,
  a: props => <Link underline="always" {...props} />,
}

export function Markdown(props: Options): ReactElement {
  return (
    <ReactMarkdown
      components={components}
      {...props}
    />
  )
}
