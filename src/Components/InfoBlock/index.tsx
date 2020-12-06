import React, { CSSProperties, FC, ReactNode } from 'react'
import { Alert, SafeAnchor } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { ETheme, themes, colorSchemeDark, colorSchemeLight, getVariant } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './InfoBlock.scss'

export enum EVariant {
  info = 'info',
  link = 'link',
  error = 'error'
}

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Insert content */
  content?: string
  /** Set heading */
  heading?: string
  /** Set link */
  link?: {
    as?: ReactNode
    to?: string
    href?: string
    title?: string
    newTab?: boolean
    style?: CSSProperties
  }
  /** Set color variant */
  variant?: EVariant
  /** Set class selectors */
  className?: string

  wide?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: '',
  className: '',
  link: {},
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return { __html: content }
}

const InfoBlock: FC<Props> = (props: Props) => {
  const { content, heading, theme, variant, link, className, wide } = generateRenderProps(defaultProps, props)
  const { as, to, href, title: linkTitle, newTab, style } = link

  const { color, backgroundColor, borderColor } = theme === ETheme.DARK
    ? { ...colorSchemeDark }
    : { ...colorSchemeLight }

  const styled = {
    color: color[getVariant(variant)].value,
    backgroundColor: backgroundColor[getVariant(variant)].value,
    borderColor: borderColor[getVariant(variant)].value,
    borderStyle: 'solid',
    borderRadius: wide ? 0 : '10px',
    width: wide ? '100%' : 'unset',
    textAlign: 'center' as 'center'
  }

  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noreferrer' : undefined
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <Alert className={className} style={styled}>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      {
        linkTitle && <Alert.Link
          as={as}
          to={to}
          href={href}
          style={{ ...linkStyles, ...style }}
          rel={rel}
          target={target}
        >
          {linkTitle}
        </Alert.Link>
      }
      {
        content && content.split('\n').map((contentLine: string) => (
          <div
            key={uuidv4()}
            style={{ width: '100%' }}
            dangerouslySetInnerHTML={createMarkup(contentLine)}
          />
        ))
      }
    </Alert >
  )
}

export default InfoBlock
