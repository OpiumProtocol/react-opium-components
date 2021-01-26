import React, { FC, CSSProperties, useState, BaseSyntheticEvent } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  themes,
  TVariant,
} from '../../Constants/Types/theme.types'

import './Button.scss'

export type Props = {
  refs?: any
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
  variant?: TVariant
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
    id,
    onClick,
    refs,
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
    background: variant !== 'rainbow' ? backgroundColor[variant as TVariant].value : false,
    borderColor: borderColor[variant as TVariant].value,
    color: color[variant as TVariant].value,
    borderStyle: 'solid',
    borderRadius: '30px',
    ...style,
  }

  if (variant === 'rainbow') {
    styles.border = 0
  }

  if (hover) {
    styles.background = variant !== 'rainbow' ? backgroundColor[variant as TVariant].hover : false
    styles.borderColor = borderColor[variant as TVariant].hover
    styles.color = color[variant as TVariant].hover
    variant == 'rainbow' ? styles.border = 0 : ''
  }

  if (disabled) {
    styles.backgroundColor = backgroundColor[variant as TVariant].disabled
    styles.borderColor = borderColor[variant as TVariant].disabled
    styles.color = color[variant as TVariant].disabled
  }

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined

  const handleRainbowClick = (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    if (id) e.target.setAttribute('id', id)
    onClick(e)
  }

  return (
    <>
      {
        variant === 'rainbow'
          ? <Button
            onClickCapture={handleRainbowClick}
            ref={refs}
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
            <span
              className="btn__bg"
              style={{
                background: backgroundColor[variant as TVariant].value,
                opacity: hover ? theme === ETheme.DARK ? '0.8' : '0.3' : '0.5'
              }} />
            <span className="btn__label">{label.toUpperCase()}</span>
          </Button>
          : <Button
            onClick={onClick}
            ref={refs}
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
      }
    </>
  )
}

export default OpiumButton
