import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import NewNumberInput from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const message = text('Text', 'NewNumberInput')

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
      <NewNumberInput
        theme={theme}
        label={'Amount'}
        uncontrolled={false}
        onChange={() => {}}
        onMaxClick={() => {}}
      />
      <NewNumberInput
        theme={theme}
        label={'Remove'}
        value={0}
        uncontrolled={false}
        onChange={() => {}}
      />
      <NewNumberInput
        theme={theme}
        label={'AutoSelect'}
        value={0.01}
        uncontrolled={false}
        onChange={() => {}}
      />
      <NewNumberInput
        theme={theme}
        label={'Amount'}
        value={0}
        uncontrolled={false}
        onChange={() => {}}
        disabled
      />
    </div>
  )
}

NewNumberInput.defaultProps = {
  theme: ETheme.DARK,
}

export default {
  title: 'NewNumberInput component',
  decorators: [withKnobs],
  component: NewNumberInput,
  parameters: {},
}
