import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import StaticChart from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const StaticChartStory = () => {
  const message = text('Text', 'Static Chart')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value

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
      <StaticChart
        theme={theme}
        height={'286px'}
        width={'100%'}
        chartData2={{ tooltipTitle: 'Profit', tooltipSuffix: '%' }}
        type='Long strangle'
        chartData1={{ tooltipTitle: 'Loss', tooltipSuffix: '%' }}
        domainY={[-1, 1]}
        increaseDomainY={0.3}
      />
    </div>
  )
}

export default {
  title: 'StaticChart component',
  decorators: [withKnobs],
  component: StaticChartStory,
  parameters: {},
}
