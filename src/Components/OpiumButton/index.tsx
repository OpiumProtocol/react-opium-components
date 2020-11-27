import React, { FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  TColorScheme,
  colorSchemeDark,
  colorSchemeLight,
  TThemes,
  themes,
} from '../../Constants/Types/theme.types'

import './Button.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set button title */
  label: string
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
  /** Set on click action */
  onClick: Function // () => void
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: {},
  onClick: () => { },
}

const OpiumButton: FC<Props> = (props: Props) => {
  const { label, theme, style, variant, className, ...rest } = generateRenderProps(defaultProps, props)

  const colorScheme = theme === ETheme.DARK ? { ...colorSchemeDark } : { ...colorSchemeLight }
  const { color, backgroundColor, borderColor } = colorScheme
  const getVariant = (variant: any) => {
    if (variant === 'primary') return 'primary'
    if (variant === 'secondary') return 'secondary'
    if (variant === 'danger') return 'danger'
    if (variant === 'success') return 'success'
    if (variant === 'warning') return 'warning'
    return 'primary'
  }

  const buttonStyle = {
    color: color[getVariant(variant)],
    backgroundColor: backgroundColor[getVariant(variant)],
    borderColor: borderColor[getVariant(variant)],
    borderStyle: 'solid',
  }

  return (
    <Button
      // className={`color-scheme-${theme} ${className}`}
      style={{ ...buttonStyle, ...style }}
      className={`${className}`}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default OpiumButton
