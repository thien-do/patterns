import type { ButtonProps, CheckboxProps, TextField } from '@radix-ui/themes'
import { useMedia } from './media'

/**
 * There's not really a unified "size" type in Radix,
 * so we just get it from some common components.
 */
type Size = TextField.RootProps['size']
  & ButtonProps['size']
  & CheckboxProps['size']

export function useSizePointer(): Size {
  const isTouch = useMedia('(pointer: coarse)')
  return isTouch ? '3' : '2'
}
