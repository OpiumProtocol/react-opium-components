import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropdownSearchSelector from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import { TOneInchToken } from './index'

// @ts-ignore
// import { ReactComponent as YourSvg } from '../../Images/droplist-logo-test.svg'
import iconPng from '../../Images/droplist-logo-test.png'

export const dropdownSelector = () => {
  const items: TOneInchToken[] = [
    {
      symbol: '',
      name: 'First',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
    {
      symbol: '',
      name: 'Second',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
    {
      symbol: '',
      name: 'Third',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
    {
      symbol: '',
      name: 'Fourth',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
    {
      symbol: '',
      name: 'Fifth',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
    {
      symbol: '',
      name: 'Sixth',
      address: '',
      decimals: 0,
      logoURI: iconPng,
    },
  ]

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [eventKey, setEventKey] = useState<any>('1')
  const message = text('Text', 'DropdownSearchSelector')

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
      <DropdownSearchSelector
        theme={theme}
        items={items}
        label={'From'}
        disabled
        eventKey={eventKey}
        onClick={() => { }}
        onSelect={(key: any, event: BaseSyntheticEvent) => {
          setEventKey(key)
        }}
      />
      <DropdownSearchSelector
        theme={theme}
        items={items}
        label={'To'}
        eventKey={eventKey}
        onClick={() => { }}
        onSelect={(key: any, event: BaseSyntheticEvent) => {
          setEventKey(key)
        }}
        defaultFirstElemnt
      />
    </div>
  )
}

DropdownSearchSelector.defaultProps = {
  theme: ETheme.DARK,
  items: [],
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

export default {
  title: 'DropdownWithSearch component',
  decorators: [withKnobs],
  component: DropdownSearchSelector,
  parameters: {},
}
