import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { generateRenderProps } from '../../Utils/helpers'

import styles from './TextBlock.module.scss'

interface Props {
  content?: Array<string>
  textStyles?: Object
}

const defaultProps: Props = {
  content: [
    'Initial text \u000A line one',
    '\x41 \x41 \x41',
    '\u000A',
    '',
    'Initial text line two',
    'First &middot; Second',
    '<p>Paragraph</p>',
    '<span>String String</span> \n <strong>String String</strong>',
    '',
  ],

  textStyles: {
    color: 'black',
    backgroundColor: 'white',
    border: '2px black solid',
  }
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return { __html: content }
}

const TextBlock: FC<Props> = (props: Props) => {
  const { content, textStyles } = generateRenderProps(defaultProps, props)

  return (
    <div className={styles.textBox} style={textStyles}>
      {
        content.map((contentLine) => (
          <div key={uuidv4()} dangerouslySetInnerHTML={createMarkup(contentLine)} />
        ))
      }
    </div>
  )
}

export default TextBlock
