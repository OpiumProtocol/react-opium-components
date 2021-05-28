import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import ProgressBar from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const ProgressOpiumBar = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const message = text('Text', 'Progress bar')

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
      <ProgressBar
        percentage={40}
        theme={theme}
        percentageLabel={true}
        label={<div>For: <span>70.3k OPIUM</span></div>}
      />
    </div>
  )
}

ProgressOpiumBar.defaultProps = {
  theme: ETheme.DARK
}

export default {
  title: 'Progress Bar',
  decorators: [withKnobs],
  component: ProgressOpiumBar,
  parameters: {},
}
