import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import MultipleLineChart from '.'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const chart = () => {
  const message = text('Text', 'MultipleLineChart')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  // const background = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = [{ data1: 3, data2: 3.5, label: '10-2021', customTooltip: <div>wewes</div> }, { data1: 4, data2: 3.5, label: '11-2021', customTooltip: <div>wewes</div> }, { data1: 5, data2: 2, label: '12-2021', customTooltip: <div>wewes</div> }]


  const tickChanger = (dataIndex: number) => {
    return data[dataIndex].label
  }


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
      <MultipleLineChart
        theme={theme}
        data={data}
        height={'256px'}
        width={'500px'}
        chartData2={{ tooltipTitle: 'Pool', tooltipSuffix: '%' }}
        labelX={{ value: 'Label X', position: 'insideBottom' }}
        labelY={{ value: 'Label Y', angle: -90, position: 'insideLeft' }}
        tickFormatterX={tickChanger}
        // tickFormatterY={label => label.toFixed(2)}
        chartData1={{ tooltipTitle: 'Buyer', tooltipSuffix: '%' }}
      />
    </div>
  )
}

export default {
  title: 'MultipleLineChart component',
  decorators: [withKnobs],
  component: MultipleLineChart,
  parameters: {},
}
