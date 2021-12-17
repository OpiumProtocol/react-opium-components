import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import RadioButton from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const radioButton = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const message = text('Text', 'Popup')

  const [active, setActive] = React.useState<string>('')

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const changed = (e: any) => {
    setActive(e)
  }

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
      <RadioButton
        id="test1"
        theme={theme}
        active={active === '1'}
        activeKey="1"
        changed={(e: any) => changed(e)}
        label="1"
      />
      <RadioButton
        id="test1"
        theme={theme}
        active={active === '2'}
        activeKey="2"
        changed={(e: any) => changed(e)}
      />
    </div>
  )
}

RadioButton.defaultProps = {
  theme: ETheme.DARK
}

export default {
  title: 'RadioButton component',
  decorators: [withKnobs],
  component: RadioButton,
  parameters: {},
}
