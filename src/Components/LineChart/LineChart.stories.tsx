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
    { label: 1654180217, lineData: 0.0011673313647086348, tooltipLabel: 0.0011673313647086348 },
    { label: 1654180218, lineData: 0.001167214631572164, tooltipLabel: 0.001167214631572164 },
    { label: 1654180219, lineData: 0.0011670979101090066, tooltipLabel: 0.0011670979101090066 },
    { label: 1654180220, lineData: 0.0011669812003179958, tooltipLabel: 0.0011669812003179958 },
    { label: 1654180221, lineData: 0.001166864502197964, tooltipLabel: 0.001166864502197964 },
    { label: 1654180222, lineData: 0.0011667478157477442, tooltipLabel: 0.0011667478157477442 },
    { label: 1654180223, lineData: 0.0011666311409661695, tooltipLabel: 0.0011666311409661695 },
    { label: 1654180224, lineData: 0.001166514477852073, tooltipLabel: 0.001166514477852073 },
    { label: 1654180225, lineData: 0.0011663978264042879, tooltipLabel: 0.0011663978264042879 },
    { label: 1654180226, lineData: 0.0011662811866216473, tooltipLabel: 0.0011662811866216473 },
    { label: 1654180227, lineData: 0.0011661645585029853, tooltipLabel: 0.0011661645585029853 },
    { label: 1654180228, lineData: 0.0011660479420471349, tooltipLabel: 0.0011660479420471349 },
    { label: 1654180229, lineData: 0.0011659313372529303, tooltipLabel: 0.0011659313372529303 },
    { label: 1654180230, lineData: 0.0011658147441192049, tooltipLabel: 0.0011658147441192049 },
    { label: 1654180231, lineData: 0.001165698162644793, tooltipLabel: 0.001165698162644793 },
    { label: 1654180232, lineData: 0.0011655815928285286, tooltipLabel: 0.0011655815928285286 },
    { label: 1654180233, lineData: 0.0011654650346692456, tooltipLabel: 0.0011654650346692456 },

    // { 'label': 1619424000000, 'lineData': 0, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1620028800000, 'lineData': 4.28, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1620633600000, 'lineData': 10.32, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1621238400000, 'lineData': 26.25, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1621843200000, 'lineData': 43.94, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1622448000000, 'lineData': 56.18, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1623052800000, 'lineData': 64.31, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1623657600000, 'lineData': 71.38, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1624262400000, 'lineData': 71.5, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1624867200000, 'lineData': 62.81, valueMeaning: 'Historical Volatility' },
    // { 'label': 1625472000000, 'lineData': 69.98, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1626076800000, 'lineData': 69.98, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1626681600000, 'lineData': 66.58, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1627286400000, 'lineData': 72.21, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1627891200000, 'lineData': 84.87, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1628496000000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1629100800000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1629705600000, 'lineData': 86.48, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1630310400000, 'lineData': 88.88, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1630915200000, 'lineData': 88.88, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1631520000000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1632124800000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1632729600000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1633334400000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }, 
    // { 'label': 1633939200000, 'lineData': 109.19, valueMeaning: 'Historical Volatility' }
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
        labelX={{ value: 'time', position: 'insideBottom', color: '#ff0000' }}
        labelY={{ value: 'Performance', angle: -90, position: 'insideCenter' }}
        tickFormatterX={(label) => {
          return moment.unix(label).format('HH:mm:ss')
        }}
        // domainY={[-5.07, 109.19]}
        increaseDomainY={0.1}
        animation={{ end: 1654180228, interval: 200 }}
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
