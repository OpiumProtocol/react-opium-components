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
      'price': 1
    },
    {
      'data1': 5,
      'data2': 95,
      'price': 2
    },
    {
      'data1': 10,
      'data2': 80,
      'price': 3
    },
    {
      'data1': 15,
      'data2': 75,
      'price': 5
    },
    {
      'data1': 20,
      'data2': 70,
      'price': 6
    },
    {
      'data1': 30,
      'data2': 65,
      'price': 7
    },

    {
      'data1': 35,
      'data2': 60,
      'price': 8
    },
    {
      'data1': 40,
      'data2': 55,
      'price': 9
    },
    {
      'data1': 45,
      'data2': 50,
      'price': 10
    },
    {
      'data1': 50,
      'data2': 45,
      'price': 12
    },

    {
      'data1': 55,
      'data2': 40,
      'price': 13
    },
    {
      'data1': 60,
      'data2': 35,
      'price': 14
    },
    {
      'data1': 65,
      'data2': 30,
      'price': 15
    },
    {
      'data1': 70,
      'data2': 25,
      'price': 16
    },
    {
      'data1': 75,
      'data2': 20,
      'price': 17
    },
    {
      'data1': 80,
      'data2': 15,
      'price': 18
    },
    {
      'data1': 85,
      'data2': 10,
      'price': 19
    },
    {
      'data1': 100,
      'data2': 5,
      'price': 20
    },
  ]

  const dataOneChart = [
    {
      'data1': 0,
      'price': 1
    },
    {
      'data1': 5,
      'price': 2
    },
    {
      'data1': 10,
      'price': 3
    },
    {
      'data1': 15,
      'price': 5
    },
    {
      'data1': 20,
      'price': 6
    },
    {
      'data1': 30,
      'price': 7
    },

    {
      'data1': 35,
      'price': 8
    },
    {
      'data1': 40,
      'price': 9
    },
    {
      'data1': 45,
      'price': 10
    },
    {
      'data1': 50,
      'price': 12
    },

    {
      'data1': 55,
      'price': 13
    },
    {
      'data1': 60,
      'price': 14
    },
    {
      'data1': 65,
      'price': 15
    },
    {
      'data1': 70,
      'price': 16
    },
    {
      'data1': 75,
      'price': 17
    },
    {
      'data1': 80,
      'price': 18
    },
    {
      'data1': 85,
      'price': 19
    },
    {
      'data1': 100,
      'price': 20
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
