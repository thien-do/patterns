import type { BoxProps } from '@radix-ui/themes'
import type { ReactElement } from 'react'
import { Box } from '@radix-ui/themes'
import css from './pane.module.css'

declare module 'react' {
  interface CSSProperties {
    '--pane-background'?: string
    '--pane-shadow'?: string
    '--pane-radius'?: string
  }
}

export type PaneProps = BoxProps & {
  background?: '0' | '1' | '2' | '3'
  shadow?: '1' | '2' | '3'
  radius?: '1' | '2' | '3' | '4' | '5'
}

export function Pane(props: PaneProps): ReactElement {
  const {
    background, shadow, radius, className, style, ...boxProps
  } = props

  const backgroundVar = background === '0'
    ? '--color-background'
    : `--gray-${background}`

  return (
    <Box
      {...boxProps}
      className={[
        background ? css.background : '',
        shadow ? css.shadow : '',
        radius ? css.radius : '',
        className,
      ].join(' ')}
      style={{
        '--pane-background': `var(${backgroundVar})`,
        '--pane-shadow': `var(--shadow-${shadow})`,
        '--pane-radius': `var(--radius-${radius})`,
        ...style,
      }}
    />
  )
}