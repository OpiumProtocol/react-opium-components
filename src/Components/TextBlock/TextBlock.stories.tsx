import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import TextBlock from './index'
import Button from '../OpiumButton'

import { ETheme, EVariant, sectionThemes } from '../../Constants/Types/theme.types'

export const textBlock = () => {
  const message = text('Text', 'TextBlock')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

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

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant={'secondary' as EVariant}
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant={'primary' as EVariant}
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>
      <TextBlock
        theme={theme}
        content={content}
      // styles={styles}
      />
    </div>
  )
}

TextBlock.defaultProps = {
  theme: ETheme.DARK,
  content: [],
  styles: {},
}

export default {
  title: 'TextBlock component',
  decorators: [withKnobs],
  component: TextBlock,
  parameters: {},
}
