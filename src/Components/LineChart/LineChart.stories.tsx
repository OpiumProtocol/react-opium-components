import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import moment from 'moment'

import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import LineChart from '.'

export const chart = () => {
  const message = text('Text', 'Composed Chart')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const background = theme === 'DARK' ? 'radial-gradient(72.74% 182.65% at 85.89% 66.02%, #111132 2.27%, #0A0A1E 98.05%)' : 'radial-gradient(100% 249.28% at 100% 100%, #DEDEFE 2.27%, #FFFFFF 70.22%)'
  const color = sectionThemes[theme as ETheme].color.primary.value
  const data = [
    { 'label': 1619424000000, 'lineData': 0, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1620028800000, 'lineData': 4.28, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1620633600000, 'lineData': 10.32, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1621238400000, 'lineData': 26.25, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1621843200000, 'lineData': 43.94, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1622448000000, 'lineData': 56.18, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1623052800000, 'lineData': 64.31, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1623657600000, 'lineData': 71.38, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1624262400000, 'lineData': 71.5, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1624867200000, 'lineData': 62.81, valueMeaning: 'Historical Volatility' },
    { 'label': 1625472000000, 'lineData': 69.98, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1626076800000, 'lineData': 69.98, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1626681600000, 'lineData': 66.58, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1627286400000, 'lineData': 72.21, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1627891200000, 'lineData': 84.87, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1628496000000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1629100800000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1629705600000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1630310400000, 'lineData': 88.88, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1630915200000, 'lineData': 88.88, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1631520000000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1632124800000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1632729600000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1633334400000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    { 'label': 1633939200000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }
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
      <LineChart
        theme={theme}
        data={data}
        labelX={{ value: 'Date', position: 'insideBottom', color: '#ff0000' }}
        labelY={{ value: 'Performance', angle: -90, position: 'insideCenter' }}
        tickFormatterX={(label) => {
          return moment(label).format('DD.MMM.YYYY')
        }}
        domainY={[-5.07, 109.19]}
      />
    </div>
  )
}

export default {
  title: 'Line Chart component',
  decorators: [withKnobs],
  component: LineChart,
  parameters: {},
}
