import React, { FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import './Button.scss'

export interface Props {
  /** Defines the button theme */
  theme: Theme
  /** Defines the button written text */
  label: string
  /** Disabled flag */
  disabled?: boolean
  /** Defines the button variant */
  variant?: 'primary' | 'secondary'
  /** Defines the button class selectors */
  className?: string
  /** Defines the button styles */
  style?: CSSProperties
  /** Defines the button action */
  onClick: Function
}

export const defaultProps: Props = {
  theme: Theme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: { },
  onClick: () => {},
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
