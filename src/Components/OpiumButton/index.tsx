import React, { FC, CSSProperties, useState } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  themes,
  EVariant,
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
  variant?: EVariant
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
  variant: 'primary' as EVariant,
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
    disabled,
    variant,
    className,
    onMouseEnter,
    onMouseLeave,
    ...rest } = generateRenderProps(defaultProps, props)

  const { color, backgroundColor, borderColor } = themes[theme as ETheme]

  const styles = {
    backgroundColor: backgroundColor[variant as EVariant].value,
    borderColor: borderColor[variant as EVariant].value,
    color: color[variant as EVariant].value,
    borderStyle: 'solid',
    borderRadius: '30px',
    ...style,
  }

  if (hover) {
    styles.backgroundColor = backgroundColor[variant as EVariant].hover
    styles.borderColor = borderColor[variant as EVariant].hover
    styles.color = color[variant as EVariant].hover
  }

  if (disabled) {
    styles.backgroundColor = backgroundColor[variant as EVariant].disabled
    styles.borderColor = borderColor[variant as EVariant].disabled
    styles.color = color[variant as EVariant].disabled
  }

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined

  return (
    <Button
      href={href}
      rel={rel}
      target={target}
      disabled={disabled}
      className={`${className}`}
      style={styles}
      onMouseEnter={onMouseEnter ? () => onMouseEnter() : () => setHover(true)}
      onMouseLeave={onMouseLeave ? () => onMouseLeave() : () => setHover(false)}
      {...rest}
    >
      {label.toUpperCase()}
    </Button>
  )
}

export default OpiumButton
