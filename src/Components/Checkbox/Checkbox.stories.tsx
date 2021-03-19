import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Checkbox from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const checkbox = () => {
  const message = text('Text', 'Checkbox')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant={'secondary'}
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant={'primary'}
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>
      <Checkbox
        theme={theme}
        onChange={(e) => console.log(e)}
      />
      <Checkbox
        theme={theme}
        label="Checkbox 2"
        onChange={(e) => console.log(e)}
      />
    </div>
  )
}

export default {
  title: 'Checkbox component',
  decorators: [withKnobs],
  component: Checkbox,
  parameters: {},
}
