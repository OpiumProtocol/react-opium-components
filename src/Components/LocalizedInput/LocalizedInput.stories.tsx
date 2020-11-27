import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LocalizedInput from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'
import { LocalizedInputType } from '../../Constants/Types/LocalizedInput.types'

import './LocalizedInput.scss'
import colors from '../../Styles/exportColors.scss'

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
    return type === 'text' || !type ? string : number
  }

  const type: LocalizedInputType = 'text'

  const backgroundColor = theme === ETheme.DARK ? colors.darkgray1 : colors.white0
  const color = theme === ETheme.DARK ? colors.gray5 : colors.darkgray1

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant='primary'
          onClick={() => setTheme(ETheme.DARK)}
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
  theme: ETheme.DARK,
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
