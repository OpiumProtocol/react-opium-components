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

  const data = [
    {
      label: 1619424000000,
      barData: 0.09,
      lineData: 0.09
    },
    {
      label: 1619510400000,
      barData: 1.02,
      lineData: 1.12
    },
    {
      label: 1619596800000,
      barData: 1.26,
      lineData: 2.39
    },
    {
      label: 1619683200000,
      barData: 0.01,
      lineData: 2.40
    },
    {
      label: 1619769600000,
      barData: 0.00,
      lineData: 2.40
    },
    {
      label: 1619856000000,
      barData: 0.08,
      lineData: 2.48
    },
    {
      label: 1619942400000,
      barData: 0.00,
      lineData: 2.48
    },
    {
      label: 1620028800000,
      barData: -0.19,
      lineData: 2.28
    },
    {
      label: 1620115200000,
      barData: 0.08,
      lineData: 2.37
    },
    {
      label: 1620201600000,
      barData: 0.61,
      lineData: 3.00
    },
    {
      label: 1620288000000,
      barData: 0.08,
      lineData: 3.08
    },
    {
      label: 1620374400000,
      barData: 0.17,
      lineData: 3.25
    },
    {
      label: 1620460800000,
      barData: -3.89,
      lineData: -0.77
    },
    {
      label: 1620547200000,
      barData: 0.10,
      lineData: -0.67
    },
    {
      label: 1620633600000,
      barData: 0.25,
      lineData: -0.42
    },
    {
      label: 1620720000000,
      barData: -2.99,
      lineData: -3.40
    },
    {
      label: 1620806400000,
      barData: 0.08,
      lineData: -3.32
    },
    {
      label: 1620892800000,
      barData: 0.08,
      lineData: -3.25
    },
    {
      label: 1620979200000,
      barData: 2.20,
      lineData: -1.12
    },
    {
      label: 1621065600000,
      barData: 0.08,
      lineData: -1.04
    },
    {
      label: 1621152000000,
      barData: 0.00,
      lineData: -1.04
    },
    {
      label: 1621238400000,
      barData: 0.00,
      lineData: -1.04
    },
    {
      label: 1621324800000,
      barData: 0.00,
      lineData: -1.04
    },
    {
      label: 1621411200000,
      barData: 0.00,
      lineData: -1.04
    },
    {
      label: 1621497600000,
      barData: 2.21,
      lineData: 1.14
    },
    {
      label: 1621584000000,
      barData: 0.00,
      lineData: 1.14
    },
    {
      label: 1621670400000,
      barData: 1.28,
      lineData: 2.43
    },
    {
      label: 1621756800000,
      barData: 0.00,
      lineData: 2.43
    },
    {
      label: 1621843200000,
      barData: -8.60,
      lineData: -6.38
    },
    {
      label: 1621929600000,
      barData: -1.39,
      lineData: -7.69
    },
    {
      label: 1622016000000,
      barData: 3.90,
      lineData: -4.09
    },
    {
      label: 1622102400000,
      barData: 0.90,
      lineData: -3.23
    },
    {
      label: 1622188800000,
      barData: 0.59,
      lineData: -2.66
    },
    {
      label: 1622275200000,
      barData: 0.00,
      lineData: -2.66
    },
    {
      label: 1622361600000,
      barData: 0.00,
      lineData: -2.66
    },
    {
      label: 1622448000000,
      barData: -2.42,
      lineData: -5.02
    },
    {
      label: 1622534400000,
      barData: 0.46,
      lineData: -4.58
    },
    {
      label: 1622620800000,
      barData: 0.20,
      lineData: -4.39
    },
    {
      label: 1622707200000,
      barData: 0.83,
      lineData: -3.60
    },
    {
      label: 1622793600000,
      barData: -1.24,
      lineData: -4.80
    },
    {
      label: 1622880000000,
      barData: 0.44,
      lineData: -4.38
    },
    {
      label: 1622966400000,
      barData: 0.72,
      lineData: -3.69
    },
    {
      label: 1623052800000,
      barData: 1.48,
      lineData: -2.26
    },
    {
      label: 1623139200000,
      barData: 2.25,
      lineData: -0.07
    },
    {
      label: 1623225600000,
      barData: 1.23,
      lineData: 1.16
    },
    {
      label: 1623312000000,
      barData: 0.34,
      lineData: 1.51
    },
    {
      label: 1623398400000,
      barData: 0.00,
      lineData: 1.51
    },
    {
      label: 1623484800000,
      barData: 0.36,
      lineData: 1.87
    },
    {
      label: 1623571200000,
      barData: -1.77,
      lineData: 0.07
    },
    {
      label: 1623657600000,
      barData: 0.06,
      lineData: 0.13
    },
    {
      label: 1623744000000,
      barData: 0.00,
      lineData: 0.13
    },
    {
      label: 1623830400000,
      barData: 0.00,
      lineData: 0.13
    },
    {
      label: 1623916800000,
      barData: 1.66,
      lineData: 1.79
    },
    {
      label: 1624003200000,
      barData: 0.00,
      lineData: 1.79
    },
    {
      label: 1624089600000,
      barData: 0.00,
      lineData: 1.79
    },
    {
      label: 1624176000000,
      barData: 0.00,
      lineData: 1.79
    },
    {
      label: 1624262400000,
      barData: 0.00,
      lineData: 1.79
    },
    {
      label: 1624348800000,
      barData: 0.00,
      lineData: 1.79
    },
    {
      label: 1624435200000,
      barData: 1.33,
      lineData: 3.15
    },
    {
      label: 1624521600000,
      barData: 1.35,
      lineData: 4.54
    },
    {
      label: 1624608000000,
      barData: 0.00,
      lineData: 4.54
    },
    {
      label: 1624694400000,
      barData: -1.07,
      lineData: 3.42
    },
    {
      label: 1624780800000,
      barData: -3.16,
      lineData: 0.15
    },
    {
      label: 1624867200000,
      barData: 0.57,
      lineData: 0.73
    },
    {
      label: 1624953600000,
      barData: 0.53,
      lineData: 1.26
    },
    {
      label: 1625040000000,
      barData: 0.89,
      lineData: 2.15
    },
    {
      label: 1625126400000,
      barData: 0.00,
      lineData: 2.15
    },
    {
      label: 1625212800000,
      barData: -0.33,
      lineData: 1.81
    },
    {
      label: 1625299200000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625385600000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625472000000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625558400000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625644800000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625731200000,
      barData: 0.00,
      lineData: 1.81
    },
    {
      label: 1625817600000,
      barData: 0.25,
      lineData: 2.07
    },
    {
      label: 1625904000000,
      barData: 0.00,
      lineData: 2.07
    },
    {
      label: 1625990400000,
      barData: 0.04,
      lineData: 2.10
    },
    {
      label: 1626076800000,
      barData: 0.00,
      lineData: 2.10
    },
    {
      label: 1626163200000,
      barData: 0.00,
      lineData: 2.10
    },
    {
      label: 1626249600000,
      barData: 0.37,
      lineData: 2.48
    },
    {
      label: 1626336000000,
      barData: 0.00,
      lineData: 2.48
    },
    {
      label: 1626422400000,
      barData: 0.00,
      lineData: 2.48
    },
    {
      label: 1626508800000,
      barData: 0.33,
      lineData: 2.82
    },
    {
      label: 1626595200000,
      barData: 0.00,
      lineData: 2.82
    },
    {
      label: 1626681600000,
      barData: 0.00,
      lineData: 2.82
    },
    {
      label: 1626768000000,
      barData: -0.32,
      lineData: 2.49
    },
    {
      label: 1626854400000,
      barData: -0.16,
      lineData: 2.33
    },
    {
      label: 1626940800000,
      barData: 0.82,
      lineData: 3.17
    },
    {
      label: 1627027200000,
      barData: 0.08,
      lineData: 3.25
    },
    {
      label: 1627113600000,
      barData: 0.10,
      lineData: 3.36
    },
    {
      label: 1627200000000,
      barData: -1.63,
      lineData: 1.68
    },
    {
      label: 1627286400000,
      barData: 0.23,
      lineData: 1.91
    },
    {
      label: 1627372800000,
      barData: 0.10,
      lineData: 2.01
    },
    {
      label: 1627459200000,
      barData: 0.00,
      lineData: 2.01
    },
    {
      label: 1627545600000,
      barData: 0.23,
      lineData: 2.25
    },
    {
      label: 1627632000000,
      barData: 0.00,
      lineData: 2.25
    },
    {
      label: 1627718400000,
      barData: 0.00,
      lineData: 2.25
    }
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
