import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LocalizedInput from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import { EFieldType } from '../../Constants/Types/LocalizedInput.types'

export const localizedInput = () => {
  const message = text('Text', 'LocalizedInput')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [string, setString] = useState<string>(message)
  const [number, setNumber] = useState<number>(0)

  const handleChange = (value: string | number) => {
    if (typeof value === 'string') setString(value)
    if (typeof value === 'number') setNumber(value)
  }

  const setValue = () => {
    return type === EFieldType.NUMBER || !type ? number : string
  }

  const type: EFieldType = EFieldType.NUMBER

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
      <LocalizedInput
        theme={theme}
        type={type}
        value={setValue()}
        label="Label"
        onClick={() => { }}
        onChange={handleChange}
        maxButton="max"
        maxButtonClick={() => setNumber(300)}
      />
      <LocalizedInput
        theme={theme}
        type={type}
        value={setValue()}
        label="Label"
        errorMessage={setValue() > 36 ? 'No enough doubloons' : undefined}
        onClick={() => { }}
        onChange={handleChange}
        maxButton="max"
        maxButtonClick={() => setNumber(500)}
      />
      <LocalizedInput
        theme={theme}
        disabled={true}
        style={{ marginTop: '1rem' }}
        type={type}
        value={setValue()}
        onClick={() => { }}
        onChange={handleChange}
      />
    </div>
  )
}

LocalizedInput.defaultProps = {
  theme: ETheme.DARK,
  type: EFieldType.NUMBER,
  locale: 'en',
  value: '',
  onClick: () => { },
  onChange: () => { },
}

export default {
  title: 'LocalizedInput component',
  decorators: [withKnobs],
  component: LocalizedInput,
  parameters: {},
}
