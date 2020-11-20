import React, { CSSProperties, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './TextBlock.scss'

export interface Props {
  theme: Theme
  content?: Array<string>
  styles?: CSSProperties
}

const defaultProps: Props = {
  theme: Theme.DARK,
  content: [],
  styles: {},
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return { __html: content }
}

const TextBlock: FC<Props> = (props: Props) => {
  const { content, theme, styles } = generateRenderProps(defaultProps, props)

  return (
    <div className={`text-block color-scheme-${theme}`} style={styles}>
      {
        content.map((contentLine) => (
          <div key={uuidv4()} dangerouslySetInnerHTML={createMarkup(contentLine)} />
        ))
      }
    </div>
  )
}

export default TextBlock
