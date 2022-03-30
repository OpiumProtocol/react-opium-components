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
  label: string | JSX.Element
  /** Providing a href will render an <a> element, styled as a button. */
  href?: string
  /** If the component is an <a> element, should be link opened in a new tab. */
  newTab?: boolean
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  variant?: TVariant
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
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
  /** Set Icon Path */
  iconPath?: string,
  /** Set Icon Position*/
  isIconAfter?: boolean
  htmlLabel?: boolean
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: {},
  onClick: () => { },
  isIconAfter: false
}

const OpiumButton: FC<Props> = (props: Props) => {

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
    size,
    className,
    onMouseEnter,
    onMouseLeave,
    iconPath,
    isIconAfter,
    htmlLabel,
    ...rest } = generateRenderProps(defaultProps, props)

  const { color, backgroundColor, borderColor, ...restStyles } = themes[theme as ETheme]

  const coreStyles = { ...style }

  const monoStyles = {
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

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined
  const iconBeforeLabel = iconPath && !isIconAfter
  const iconAfterLabel = iconPath && isIconAfter

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
            id={id}
            onClickCapture={handleRainbowClick}
            ref={refs}
            href={href}
            rel={rel}
            target={target}
            disabled={disabled}
            className={`opiumBtn color-scheme-${theme} ${className}`}
            style={rainbowStyles}
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
              {iconPath && <img src={iconPath} />}{label}
            </span>
          </Button>
          : <Button
            id={id}
            onClick={onClick}
            ref={refs}
            href={href}
            rel={rel}
            target={target}
            disabled={disabled}
            className={`opiumBtn color-scheme-${theme}${size ? ' ' + size : ''}${className ? ' ' + className : ''}`}
            variant={variant}
            style={monoStyles}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...rest}
          >
            {iconBeforeLabel && <img src={iconPath} />}{htmlLabel ? <div dangerouslySetInnerHTML={{ __html: label }} /> : label}
            {iconAfterLabel && <img className="btn__icon-after" src={iconPath} />}
          </Button>
      }
    </>
  )
}

export default OpiumButton
