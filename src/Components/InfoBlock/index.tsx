import React, { CSSProperties, FC, ReactNode } from 'react'
import { Alert, SafeAnchor } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { ETheme, themes, colorSchemeDark, colorSchemeLight, getVariant } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './InfoBlock.scss'

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
  }
  /** Set color variant */
  variant?: 'info' | 'link' | 'error'
  /** Set class selectors */
  className?: string
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
  const { content, heading, theme, variant, link, className } = generateRenderProps(defaultProps, props)
  const { as, to, href, title: linkTitle } = link

  const { color, backgroundColor, borderColor } = theme === ETheme.DARK
    ? { ...colorSchemeDark }
    : { ...colorSchemeLight }

  const styled = {
    color: color[getVariant(variant)].value,
    backgroundColor: backgroundColor[getVariant(variant)].value,
    borderColor: borderColor[getVariant(variant)].value,
    borderStyle: 'solid',
  }

  // const hovered = {
  //   color: color[getVariant(variant)].hover,
  //   backgroundColor: backgroundColor[getVariant(variant)].hover,
  //   borderColor: borderColor[getVariant(variant)].hover,
  //   borderStyle: 'solid',
  // }

  const target = (as === SafeAnchor || as === 'a') ? '_blank' : undefined
  const rel = (as === SafeAnchor || as === 'a') ? 'noreferrer' : undefined

  return (
    <Alert className={className} style={styled}>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      {
        linkTitle && <Alert.Link
          as={as}
          to={to}
          href={href}
          rel={rel}
          target={target}
        >
          {linkTitle}
        </Alert.Link>
      }
      {
        content.split('\n').map((contentLine: string) => (
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
