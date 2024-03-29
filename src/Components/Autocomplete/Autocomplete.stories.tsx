import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Autocomplete from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

const data = [
  {
    id: 'SYNTH_OPTION_CALL_V1',
    title: 'Option Call Call Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C'
  },
  {
    id: 'SYNTH_OPTION_PUT_V1',
    title: 'Option Put',
    address: '0xb9D953f961Dbb7CC8E6ED79C3cca19fD7DA92204',
    ticker: 'OPT-P',
  },
  {
    id: 'SYNTH_OPTION_CALL_V0',
    title: 'Option Call2',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-P2',
  },
  {
    id: 'SYNTH_OPTION_CALL_V2',
    title: 'Option Call3',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C'
  },
  {
    id: 'SYNTH_OPTION_CALL_V3',
    title: 'Option Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C'
  },
  {
    id: 'SYNTH_OPTION_CALL_V4',
    title: 'Option Call',
    address: '0xE3Bd3a8Dd0599e734aAED77Eda6cdCc1c5E7C5DC',
    ticker: 'OPT-C'
  }
]

export const AutocompleteStory = () => {
  const message = text('Text', 'Autocomplete')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

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
      <Autocomplete
        theme={theme}
        items={data}
        onSelect={() => {}}
        bodyScrollHeight="120"
        withCircle={true}
      />
    </div>
  )
}


export default {
  title: 'Autocomplete component',
  decorators: [withKnobs],
  component: AutocompleteStory,
  parameters: {},
}
