import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LocalizedInput from './index'
import Button from '../OpiumButton'

import { Theme } from '../../Constants/Types/theme.types'
import { LocalizedInputType } from '../../Constants/Types/LocalizedInput.types'

import './LocalizedInput.scss'

export const localizedInput = () => {
  const message = text('Text', 'LocalizedInput')

  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const [string, setString] = useState<string>(message)
  const [number, setNumber] = useState<number>(0)

  const handleChange = (value: string | number) => {
    if (typeof value === 'string') setString(value)
    if (typeof value === 'number') setNumber(value)
  }

  const setValue = () => {
    return type === 'text' || !type ? string : number
  }

  const type: LocalizedInputType = 'text'

  return (
    <div style={{ padding: '0 3rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant='primary'
          onClick={() => setTheme(Theme.DARK)}
        />
      </div>
      <LocalizedInput
        theme={theme}
        type={type}
        value={setValue()}
        onClick={() => { }}
        onChange={handleChange}
      />
    </div>
  )
}

LocalizedInput.defaultProps = {
  theme: Theme.DARK,
  type: 'text',
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
