import React, { FC, CSSProperties, useState } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  colorSchemeDark,
  colorSchemeLight,
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
  onClick: Function
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
  const [hover, setHover] = useState<boolean>(false)

  const { label, theme, style, variant, className, ...rest } = generateRenderProps(defaultProps, props)

  const colorScheme = theme === ETheme.DARK
    ? { ...colorSchemeDark }
    : { ...colorSchemeLight }

  const { color, backgroundColor, borderColor } = colorScheme
  const getVariant = (variant: any) => {
    if (variant === 'primary') return 'primary'
    if (variant === 'secondary') return 'secondary'
    if (variant === 'danger') return 'danger'
    if (variant === 'success') return 'success'
    if (variant === 'warning') return 'warning'
    return 'primary'
  }

  const styled = {
    color: color[getVariant(variant)].value,
    backgroundColor: backgroundColor[getVariant(variant)].value,
    borderColor: borderColor[getVariant(variant)].value,
    borderStyle: 'solid',
  }

  const hovered = {
    color: color[getVariant(variant)].hover,
    backgroundColor: backgroundColor[getVariant(variant)].hover,
    borderColor: borderColor[getVariant(variant)].hover,
    borderStyle: 'solid',
  }

  const buttonStyle = hover
    ? generateRenderProps(hovered, style)
    : generateRenderProps(styled, style)

  return (
    <Button
      className={`${className}`}
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default OpiumButton
