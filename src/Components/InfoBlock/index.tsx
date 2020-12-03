import React, { CSSProperties, FC } from 'react'
import { Alert } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { ETheme, themes, colorSchemeDark, colorSchemeLight, getVariant } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './InfoBlock.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Insert content */
  content?: Array<string>
  /** Set heading */
  heading?: string
  /** Set link */
  link?: {
    as?: JSX.Element
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
  content: [],
  className: '',
  link: {},
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return content
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

  return (
    <Alert className={className} style={styled}>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      {linkTitle && <Alert.Link as={as} href={href} to={to}>{linkTitle}</Alert.Link>}
      {
        content.length
          && content.map((item: string, idx: number, arr: string[]) => {
            if (idx + 1 === arr.length) {
              return (<p className="mb-0" key={uuidv4()}>{item}</p>)
            }
            return (<p key={uuidv4()}>{item}</p>)
          })
      }
    </Alert >
  )
}

export default InfoBlock
