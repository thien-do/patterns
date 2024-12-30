import type { ReactElement } from 'react'
import { Flex, Heading, Link, Text } from '@radix-ui/themes'
import css from './title.module.css'

export function AppTitle(): ReactElement {
  return (
    <Text as="div" color="gray" weight="bold" asChild>
      <Flex direction="column" gap="2">
        <Text as="div" className={css.lead}>
          Things I need to repeat too many times in code reviews
        </Text>
        <Heading as="h1" size="8" wrap="pretty" highContrast>
          Potentially useful patterns in user interfaces
        </Heading>
        <Text as="div">
          <Text>
            Source code at
            {' '}
          </Text>
          <Link href="https://github.com/thien-do/patterns">
            github.com/thien-do/patterns
          </Link>
        </Text>
      </Flex>
    </Text>
  )
}
