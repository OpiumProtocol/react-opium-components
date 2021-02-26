import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import NewNumberInput from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [eventKey, setEventKey] = useState<any>('1')
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
        eventKey={eventKey}
        onClick={() => { }}
        onSelect={(key: any, event: BaseSyntheticEvent) => {
          setEventKey(key)
        }}
        uncontrolled={false}
      />
      <NewNumberInput
        theme={theme}
        label={'Amount'}
        eventKey={eventKey}
        onClick={() => { }}
        onSelect={(key: any, event: BaseSyntheticEvent) => {
          setEventKey(key)
        }}
        value={0.01}
        uncontrolled={false}
      />
    </div>
  )
}

NewNumberInput.defaultProps = {
  theme: ETheme.DARK,
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

export default {
  title: 'NewNumberInput component',
  decorators: [withKnobs],
  component: NewNumberInput,
  parameters: {},
}
