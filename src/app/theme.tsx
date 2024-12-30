import type { ReactElement, ReactNode } from 'react'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import '@radix-ui/themes/styles.css'
import './theme.css'

export function AppTheme(props: {
  children: ReactNode
}): ReactElement {
  const { children } = props

  return (
    <ThemeProvider attribute="class">
      <Theme
        // Radix is very colourful by default,
        // so it's better to default to "gray",
        // then using "accent" manually and selectively.
        accentColor="gray"
        grayColor="mauve"
        panelBackground="solid"
        // Controlled at "body" in "main.css"
        hasBackground={false}
      >
        {children}
      </Theme>
    </ThemeProvider>
  )
}
