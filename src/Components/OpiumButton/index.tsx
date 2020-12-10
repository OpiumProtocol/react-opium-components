import React, { FC, CSSProperties, useState } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  colorSchemeDark,
  colorSchemeLight,
  getVariant,
} from '../../Constants/Types/theme.types'

import './Button.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set button title */
  label: string
  /** Providing a href will render an <a> element, styled as a button. */
  href?: string
  /** If the component is an <a> element, should be link opened in a new tab. */
  newTab?: boolean
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
  /** Handler, that works on mouse enter event */
  onMouseEnter?: Function
  /** Handler, that works on mouse leave event */
  onMouseLeave?: Function
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

  const {
    href,
    newTab,
    label,
    theme,
    style,
    variant,
    className,
    onMouseEnter,
    onMouseLeave,
    ...rest } = generateRenderProps(defaultProps, props)

  const colorScheme = theme === ETheme.DARK
    ? { ...colorSchemeDark }
    : { ...colorSchemeLight }

  const { color, backgroundColor, borderColor } = colorScheme

  const styled = {
    color: color[getVariant(variant)].value,
    backgroundColor: backgroundColor[getVariant(variant)].value,
    borderColor: borderColor[getVariant(variant)].value,
    borderStyle: 'solid',
    borderRadius: '30px'
  }

  const hovered = {
    color: color[getVariant(variant)].hover,
    backgroundColor: backgroundColor[getVariant(variant)].hover,
    borderColor: borderColor[getVariant(variant)].hover,
    borderStyle: 'solid',
    borderRadius: '30px'
  }

  const buttonStyle = hover
    ? generateRenderProps(hovered, style)
    : generateRenderProps(styled, style)

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined

  return (
    <Button
      href={href}
      rel={rel}
      target={target}
      className={`${className}`}
      style={buttonStyle}
      onMouseEnter={onMouseEnter ? () => onMouseEnter() : () => setHover(true)}
      onMouseLeave={onMouseLeave ? () => onMouseLeave() : () => setHover(false)}
      {...rest}
    >
      {label}
    </Button>
  )
}

export default OpiumButton
