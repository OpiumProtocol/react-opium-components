import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Chart from '.'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const chart = () => {
  const message = text('Text', 'Alert')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  // const background = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = [
    {
      'data1': 0,
      'data2': 100,
    },
    {
      'data1': 5,
      'data2': 95,
    },
    {
      'data1': 10,
      'data2': 80,
    },
    {
      'data1': 15,
      'data2': 75,
    },
    {
      'data1': 20,
      'data2': 70,
    },
    {
      'data1': 30,
      'data2': 65,
    },
  
    {
      'data1': 35,
      'data2': 60,
    },
    {
      'data1': 40,
      'data2': 55,
    },
    {
      'data1': 45,
      'data2': 50,
    },
    {
      'data1': 50,
      'data2': 45,
    },
  
    {
      'data1': 55,
      'data2': 40,
    },
    {
      'data1': 60,
      'data2': 35,
    },
    {
      'data1': 65,
      'data2': 30,
    },
    {
      'data1': 70,
      'data2': 25,
    },
    {
      'data1': 75,
      'data2': 20,
    },
    {
      'data1': 80,
      'data2': 15,
    },
    {
      'data1': 85,
      'data2': 10,
    },
    {
      'data1': 100,
      'data2': 5,
    },
  ]

  return (
    <div style={{ padding: '3rem', background }}>
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
      <Chart
        theme={theme}
        data={data}
        chartData1={{ tooltipTitle: 'Pool', tooltipSuffix: '%' }}
        chartData2={{ tooltipTitle: 'Buyer', tooltipSuffix: '%' }}
      />
    </div>
  )
}

export default {
  title: 'Chart component',
  decorators: [withKnobs],
  component: Chart,
  parameters: {},
}
