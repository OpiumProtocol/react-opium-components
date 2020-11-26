import React, { CSSProperties, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './TextBlock.scss'

export type Props = {
  /** Define theme */
  theme?: Theme
  /** Insert content */
  content?: Array<string>
  /** Set class selectors */
  className?: string
  /** Set styles */
  styles?: CSSProperties
}

const defaultProps: Props = {
  theme: Theme.DARK,
  content: [],
  className: '',
  styles: {},
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return { __html: content }
}

const TextBlock: FC<Props> = (props: Props) => {
  const { content, theme, styles, className } = generateRenderProps(defaultProps, props)

  return (
    <div className={`text-block color-scheme-${theme} ${className}`} style={styles}>
      {
        content.map((contentLine: string) => (
          <div
            key={uuidv4()}
            style={{ width: '100%' }}
            dangerouslySetInnerHTML={createMarkup(contentLine)}
          />
        ))
      }
    </div>
  )
}

export default TextBlock
