import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Chart from '.'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const chart = () => {
  const message = text('Text', 'Chart')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)


  // const background = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = [{ data1: 3, data2: -100, price: -34701.98344888704 }, { data1: 3, data2: -100, price: 34701.98344888704 }, { data1: 3, data2: -100, price: 36870.85741444248 }, { data1: 3, data2: -100, price: 39039.73137999792 }, { data1: 3, data2: -100, price: 41208.605345553355 }, { data1: 3, data2: -100, price: 43377.47931110879 }, { data1: -2, data2: 59, price: 45546.35327666423 }, { data1: -6, data2: 203, price: 47715.22724221967 }, { data1: -10, data2: 335, price: 49884.10120777511 }, { data1: -14, data2: 456, price: 52052.975173330546 }, { data1: -17, data2: 567, price: 54221.849138885984 }, { data1: -20, data2: 669, price: 56390.72310444142 }, { data1: -23, data2: 764, price: 58559.59706999686 }, { data1: -26, data2: 852, price: 60728.4710355523 }, { data1: -28, data2: 934, price: 62897.34500110774 }, { data1: -30, data2: 1011, price: 65066.218966663175 }, { data1: -32, data2: 1083, price: 67235.09293221861 }, { data1: -34, data2: 1150, price: 69403.96689777405 }, { data1: -36, data2: 1213, price: 71572.84086332949 }, { data1: -38, data2: 1273, price: 73741.71482888493 }, { data1: -40, data2: 1329, price: 75910.58879444037 }, { data1: -41, data2: 1381, price: 78079.4627599958 }, { data1: -43, data2: 1432, price: 80248.33672555124 }, { data1: -44, data2: 1479, price: 82417.21069110668 }, { data1: -46, data2: 1524, price: 84586.08465666212 }, { data1: -47, data2: 1567, price: 86754.95862221756 }, { data1: -48, data2: 1607, price: 88923.832587773 }, { data1: -49, data2: 1646, price: 91092.70655332843 }, { data1: -50, data2: 1683, price: 93261.58051888387 }, { data1: -52, data2: 1718, price: 95430.45448443931 }]
  const refLines = [ { value: 'Strike price:', price: 0, color: '#999BBC' }, { value: 'Current price:', price: 62500, color: '#999BBC' } ]

  const dataOneChart = [
    {
      'data1': -10,
      'price': 1
    },
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
        height={'256px'}
        width={'500px'}
        chartData2={{ tooltipTitle: 'Pool', tooltipSuffix: '%' }}
        labelX={{ value: 'Label X', position: 'insideBottom' }}
        labelY={{ value: 'Label Y', angle: -90, position: 'insideLeft' }}
        // chartData2={{ tooltipTitle: 'Buyer', tooltipSuffix: '%' }}
        referenceLines={refLines}
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
