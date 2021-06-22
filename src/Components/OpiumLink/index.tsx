import React, { FC, CSSProperties } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  themes,
} from '../../Constants/Types/theme.types'

import './OpiumLink.scss'

export type Props = {
    refs?: any
    /** Define theme */
    theme?: ETheme
    /** Set button title */
    label: string
    /** Page link */
    href?: string
    /** Flag for opening link in a new tab */
    newTab?: boolean
    /** Disabled flag */
    disabled?: boolean
    /** Set class selectors */
    className?: string
    /** Set styles */
    style?: CSSProperties
    /** Providing Link href  */
    to?: string

}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  label: '',
  style: {},
}

const OpiumLink: FC<Props> = (props: Props) => {

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
    className,
    onMouseEnter,
    onMouseLeave,
    ...rest } = generateRenderProps(defaultProps, props)

  const { color, backgroundColor, borderColor, ...restStyles } = themes[theme as ETheme]

  const coreStyles = { ...style }

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined

  return (
    <div className={`opium-link  color-scheme-${theme}`}>
      {(href || (href && newTab)) ? (<a href={href} target={target} style={coreStyles} rel={rel}>{label}</a>) : <div></div> }
    </div>
  )
}

export default OpiumLink
