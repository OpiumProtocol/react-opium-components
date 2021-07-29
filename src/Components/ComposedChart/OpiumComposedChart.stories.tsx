import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import OpiumComposedChart from '.'

export const chart = () => {
  const message = text('Text', 'Composed Chart')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = [{
    label: 'Fri 29',
    barData: 2,
    lineData: 2,
  }, {
    label: 'May',
    barData: 4,
    lineData: 4
  }, {
    label: 'Sat 09',
    barData: 2,
    lineData: 2
  }, {
    label: 'Wed 09',
    barData: -2,
    lineData: -2,
  }, {
    label: 'Mon 25',
    barData: -4,
    lineData: -4,
  }, {
    label: 'Fri 24',
    barData: -6,
    lineData: -6,
  }, {
    label: 'Jun',
    barData: -8,
    lineData: -8,
  }, {
    label: 'Tue 05',
    barData: -3,
    lineData: -3,
  }, {
    label: 'Sat 10',
    barData: -2,
    lineData: -2,
  }, {
    label: 'Wed 11',
    barData: -3,
    lineData: -3,
  }, {
    label: 'Thu 17',
    barData: 1,
    lineData: 1,
  }, {
    label: 'Fri 25',
    barData: 2,
    lineData: 2,
  }, {
    label: 'Tue 29',
    barData: 3,
    lineData: 3,
  }]

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
      <OpiumComposedChart
        theme={theme}
        data={data}
        labelX={{ value: 'Date', position: 'insideBottom', color: '#ff0000' }}
        labelY={{ value: 'Performance', angle: -90, position: 'insideCenter' }}
      />
    </div>
  )
}

export default {
  title: 'Composed Chart component',
  decorators: [withKnobs],
  component: OpiumComposedChart,
  parameters: {},
}
