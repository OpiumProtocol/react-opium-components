import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropdownSelector from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const items = [
    { title: 'First', value: '1' },
    { title: 'Second', value: '2' },
    { title: 'Third', value: '3' },
    { title: 'Fourth', value: '4' },
  ]

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [eventKey, setEventKey] = useState<any>('1')
  const [title, setTitle] = useState<any>(items[0].title)
  const message = text('Text', 'DropdownSelector')

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
      <DropdownSelector
        theme={theme}
        title={title}
        items={items}
        eventKey={eventKey}
        onClick={() => { }}
        onSelect={(key: any, event: BaseSyntheticEvent) => {
          setEventKey(key)
          setTitle(event.target.innerText)
        }}
        uncontrolled={false}
      />
    </div>
  )
}

DropdownSelector.defaultProps = {
  theme: ETheme.DARK,
  items: [],
  title: '',
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

export default {
  title: 'DropdownSelector component',
  decorators: [withKnobs],
  component: DropdownSelector,
  parameters: {},
}
