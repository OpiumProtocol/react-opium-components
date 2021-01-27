import React, { FC, CSSProperties, useRef, useState, BaseSyntheticEvent } from 'react'
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

  const rainbowCoverRef = useRef<HTMLSpanElement>(null)
  const rainbowLabelRef = useRef<HTMLSpanElement>(null)

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

  const { color, backgroundColor, borderColor, ...restStyles } = themes[theme as ETheme]

  const coreStyles = { ...restStyles, ...style }

  const monoStyles = {
    backgroundColor: backgroundColor[variant as TVariant].value,
    borderColor: borderColor[variant as TVariant].value,
    color: color[variant as TVariant].value,
    ...coreStyles,
  }

  const rainbowStyles = {
    backgroundColor: 'transparent',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderWidth: 0,
    ...coreStyles,
  }

  const rainbowCover = {
    opacity: '0.5',
    background: backgroundColor['rainbow'].value,
  }

  const rainbowLabel = {
    color: color['rainbow'].value,
  }

  if (hover) {
    monoStyles.backgroundColor = backgroundColor[variant as TVariant].hover
    monoStyles.borderColor = borderColor[variant as TVariant].hover
    monoStyles.color = color[variant as TVariant].hover
    rainbowCover.opacity = '0.8'
    rainbowCover.background = backgroundColor['rainbow'].hover
    rainbowLabel.color = color['rainbow'].hover
  }

  if (disabled) {
    monoStyles.backgroundColor = backgroundColor[variant as TVariant].disabled
    monoStyles.borderColor = borderColor[variant as TVariant].disabled
    monoStyles.color = color[variant as TVariant].disabled
    rainbowLabel.color = color['rainbow'].disabled
  }

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined

  const handleRainbowClick = (e: BaseSyntheticEvent) => {
    e.stopPropagation()
    if (id) {
      if (rainbowCoverRef.current) {
        rainbowCoverRef.current.removeAttribute('id')
      }

      if (rainbowLabelRef.current) {
        rainbowLabelRef.current.removeAttribute('id')
      }

      e.target.setAttribute('id', id)
    }
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
            style={rainbowStyles}
            onMouseEnter={onMouseEnter ? () => onMouseEnter() : () => setHover(true)}
            onMouseLeave={onMouseLeave ? () => onMouseLeave() : () => setHover(false)}
            {...rest}
          >
            <span
              ref={rainbowCoverRef}
              className="btn__bg"
              style={rainbowCover} />

            <span
              ref={rainbowLabelRef}
              className="btn__label"
              style={rainbowLabel}
            >
              {label.toUpperCase()}
            </span>
          </Button>
          : <Button
            onClick={onClick}
            ref={refs}
            href={href}
            rel={rel}
            target={target}
            disabled={disabled}
            className={`${className}`}
            style={monoStyles}
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
