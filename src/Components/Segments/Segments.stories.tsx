import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Segments from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

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
      <Segments
        theme={theme}
        items={items}
        variant={'secondary'}
        currentValue={currentValue}
        onClick={(val: string) => setCurrentValue(val)}
        uncontrolled={false}
        className=''
        disableButton={1}
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
