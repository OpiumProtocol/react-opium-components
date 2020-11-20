import React, { CSSProperties, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './TextBlock.scss'

interface Props {
  theme: Theme
  content?: Array<string>
  styles?: CSSProperties
}

const defaultProps: Props = {
  theme: Theme.DARK,
  content: [
    'Initial text \u000A line one',
    '\x41 \x41 \x41',
    '\u000A',
    '',
    'Initial text line two',
  ],

  // styles: {
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '2px black solid',
  // }
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
