import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Switcher from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const switcher = () => {
  const message = text('Text', 'Switcher')

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
      <Switcher
        theme={theme}
        id="toggle"
        uncontrolled
        label={theme === ETheme.DARK ? 'Switcher. Dark mode' : 'Switcher. Light mode'}
        checked={theme === ETheme.DARK}
        onChange={(value: boolean) => setTheme(!value ? ETheme.LIGHT : ETheme.DARK)}
      />
      <Switcher
        theme={theme}
        id="toggle"
        className="theme"
        uncontrolled
        label={theme === ETheme.DARK ? 'Theme. Dark mode' : 'Theme. Light mode'}
        checked={theme === ETheme.DARK}
        onChange={(value: boolean) => setTheme(!value ? ETheme.LIGHT : ETheme.DARK)}
      />
      <Switcher
        theme={theme}
        id="toggle2"
        uncontrolled={false}
        label={theme === ETheme.DARK ? 'Switcher. Dark mode' : 'Switcher. Light mode'}
        onChange={(value: boolean) => setTheme(!value ? ETheme.LIGHT : ETheme.DARK)}
      />
    </div>
  )
}

export default {
  title: 'Switcher component',
  decorators: [withKnobs],
  component: Switcher,
  parameters: {},
}
