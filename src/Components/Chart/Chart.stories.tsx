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

  const data = [
    { data1: '0', data2: '0', price: 4 },
    { data1: '0', data2: '0', price: 4.25 },
    { data1: '0', data2: '0', price: 4.5 },
    { data1: '0', data2: '0', price: 4.75 },
    { data1: '0', data2: '0', price: 5 },
    { data1: '-5', data2: '5', price: 5.25 },
    { data1: '-9', data2: '9', price: 5.5 },
    { data1: '-13', data2: '13', price: 5.75 },
    { data1: '-17', data2: '17', price: 6 },
    { data1: '-20', data2: '20', price: 6.25 },
    { data1: '-23', data2: '23', price: 6.5 },
    { data1: '-26', data2: '26', price: 6.75 },
    { data1: '-29', data2: '29', price: 7 },
    { data1: '-31', data2: '31', price: 7.25 },
    { data1: '-33', data2: '33', price: 7.5 },
    { data1: '-35', data2: '35', price: 7.75 },
    { data1: '-38', data2: '38', price: 8 },
    { data1: '-39', data2: '39', price: 8.25 },
    { data1: '-41', data2: '41', price: 8.5 },
    { data1: '-43', data2: '43', price: 8.75 },
    { data1: '-44', data2: '44', price: 9 },
    { data1: '-46', data2: '46', price: 9.25 },
    { data1: '-47', data2: '47', price: 9.5 },
    { data1: '-49', data2: '49', price: 9.75 },
    { data1: '-50', data2: '50', price: 10 },
    { data1: '-51', data2: '51', price: 10.25 },
    { data1: '-52', data2: '52', price: 10.5 },
    { data1: '-53', data2: '53', price: 10.75 },
    { data1: '-55', data2: '55', price: 11 }
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
        labelX={{ value: 'Label X', position: 'insideBottom' }}
        labelY={{ value: 'Label Y', angle: -90, position: 'insideLeft' }}
        // chartData2={{ tooltipTitle: 'Buyer', tooltipSuffix: '%' }}
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
