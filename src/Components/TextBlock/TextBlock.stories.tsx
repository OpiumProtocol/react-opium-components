import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import TextBlock from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const textBlock = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const message = text('Text', 'TextBlock')

  const styles = {
    color: 'darkred',
    backgroundColor: 'white',
    border: '1px darkred solid',
    borderRadius: '5px',
  }

  const content = [
    'Initial text \u000A line one',
    '\x41 \x41 \x41',
    '\u000A',
    '',
    'Initial text line two',
    'First &middot; Second',
    '<p>Paragraph</p>',
    '<span>String String</span> \n <strong>String String</strong>',
    '',
  ]

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          text="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          text="Dark theme"
          variant='primary'
          onClick={() => setTheme(Theme.DARK)}
        />
      </div>
      <TextBlock
        theme={theme}
        content={content}
        // styles={styles}
      />
    </>
  )
}

export default { title: 'TextBlock component', decorators: [withKnobs] }
