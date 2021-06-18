import { text, withKnobs } from '@storybook/addon-knobs'
import React, { useState } from 'react'
import { ETheme, sectionThemes } from '../..'
import Button from '../OpiumButton'
import OpiumLink from './index'

export const opiumLink = () => {
  const message = text('Text', 'Opium link')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (<div style={{ padding: '3rem', backgroundColor }}>
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
    <OpiumLink theme={theme} label={'Link'} href={'http://app.opium.finance'} />
  </div>)
}

export default {
  title: 'Opium link component',
  decorators: [withKnobs],
  component: OpiumLink,
  parameters: {},
}
