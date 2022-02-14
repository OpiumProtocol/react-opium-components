import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropDown from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

const data = [
  {
    id: 'SYNTH_OPTION_CALL_V1',
    title: 'Option Call Call Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C1'
  },
  {
    id: 'SYNTH_OPTION_PUT_V1',
    title: 'Option Put',
    address: '0xb9D953f961Dbb7CC8E6ED79C3cca19fD7DA92204',
    ticker: 'OPT-P',
  },
  {
    id: 'Chainlink ETH/USD',
    title: 'Chainlink ETH/USD',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    decimals: 18,
  },
  {
    id: 'SYNTH_OPTION_CALL_V2',
    title: 'Option Call3',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: ' WETH/USD'
  },
  {
    id: 'SYNTH_OPTION_CALL_V3',
    title: 'Option Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C3'
  },
  {
    id: 'SYNTH_OPTION_CALL_V4',
    title: 'Option Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C'
  }
]

// const data = [3000, 2900, 2800, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1900]

export const DropDownStory = () => {
  const message = text('Text', 'DropDown')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value
  const [items, setItems] = useState(data)

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
      <DropDown
        theme={theme}
        items={items}
        onSelect={() => {}}
        bodyScrollHeight="120"
        arrayNumbers={false}
      />
    </div>
  )
}


export default {
  title: 'DropDown component',
  decorators: [withKnobs],
  component: DropDownStory,
  parameters: {},
}
