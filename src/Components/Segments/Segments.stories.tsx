import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Segments from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const segments = () => {
  const message = text('Text', 'Segments')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [currentValue, setCurrentValue] = useState('')

  const items = [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3' },
    { label: 'Fourth', value: '4' },
  ]

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
      <Segments
        theme={theme}
        items={items}
        variant='secondary'
        currentValue={currentValue}
        onClick={(val: string) => setCurrentValue(val)}
        uncontrolled={false}
        className=''
      />
    </div>
  )
}

Segments.defaultProps = {
  theme: ETheme.DARK,
  currentValue: '',
  items: [],
  onClick: () => { },
}

export default {
  title: 'Segments component',
  decorators: [withKnobs],
  component: Segments,
  parameters: {},
}
