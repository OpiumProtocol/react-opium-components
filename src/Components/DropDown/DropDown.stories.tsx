import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropDown from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

// const data = [
//   {
//     id: 'SYNTH_V1',
//     title: 'Option Call Call Call',
//     address: '0x1111111111111111111111111111111111111111',
//     ticker: 'OPT-C1',
//     image: 'https://static.opium.finance/images/tokens/weth.png'
//   },
//   {
//     id: 'SYNTH_V5',
//     title: 'Option Put',
//     address: '0x1111111111111111111111111111111111111111',
//     ticker: 'OPT-P',
//   },
//   {
//     id: 'SYNTH_V2',
//     title: 'Option Call3',
//     address: '0x1111111111111111111111111111111111111111',
//     ticker: ' WETH/USD'
//   },
//   {
//     id: 'SYNTH_V3',
//     title: 'Option Call',
//     address: '0x1111111111111111111111111111111111111111',
//     ticker: 'OPT-C123'
//   },
//   {
//     id: 'SYNTH_V4',
//     title: 'Option Call',
//     address: '0x1111111111111111111111111111111111111111',
//     ticker: 'OPT-C12'
//   }
// ]

const data = [2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200]

export const DropDownStory = () => {
  const message = text('Text', 'DropDown')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value
  const [items, setItems] = useState(data)
  const [value, setValue] = useState(data[0])
  const [uValue, setUValue] = useState(2300)


  const handler = (e: any) => {
    console.log(e)
    
    // const value = data.find(item => item.id === e) 
    // if (value) {
    //   setValue(value)
    // }
  }

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
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
        <Button
          theme={theme}
          label="Set upper"
          variant={'primary'}
          onClick={() => setUValue(2900)}
        />
        <Button
          theme={theme}
          label="Set value"
          variant={'primary'}
          onClick={() => setValue(2600)}
        />
      </div>
      <DropDown
        theme={theme}
        items={items}
        onSelect={handler}
        arrayNumbers={true}
        characters={30}
        value={value}
        upperValue={uValue}
      />
    </div>
  )
}


export default {
  title: 'DropDown component',
  decorators: [withKnobs],
  component: DropDownStory,
  parameters: {},
}
