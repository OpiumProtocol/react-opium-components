import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LokalizedInput from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

import './LokalizedInput.scss'

export const lokalizedInput = () => {
  const message = text('Text', 'LokalizedInput')

  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  const [string, setString] = useState<string>(message)
  const [number, setNumber] = useState<number>(0)

  const handleChange = (value: string | number) => {
    if (typeof value === 'string') setString(value)
    if (typeof value === 'number') setNumber(value)
  }

  const setValue = () => {
    return type === 'text' || !type ? string : number
  }

  const type: string = 'text'

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          text="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          text="Dark theme"
          variant='primary'
          onClick={() => setTheme(Theme.DARK)}
        />
      </div>
      <LokalizedInput
        theme={theme}
        type={type}
        value={setValue()}
        onClick={() => { }}
        onChange={handleChange}
      />
    </>
  )
}

export default { title: 'LocalizedInput component', decorators: [withKnobs] }
