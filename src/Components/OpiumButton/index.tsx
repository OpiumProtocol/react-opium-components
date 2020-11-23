import React, { FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import './Button.scss'

export interface Props {
  /** Define theme */
  theme: Theme
  /** Set button title */
  label: string
  /** Set button variant */
  variant?: 'primary' | 'secondary'
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
  /** Set on click action */
  onClick: () => void
}

export const defaultProps: Props = {
  theme: Theme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: { },
  onClick: () => { },
}

const OpiumButton: FC<Props> = (props: Props) => {
  const { label, theme, className, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Button
      className={`color-scheme-${theme} ${className}`}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default OpiumButton
