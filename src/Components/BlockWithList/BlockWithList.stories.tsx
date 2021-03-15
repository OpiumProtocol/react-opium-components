import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import BlockWithList from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const items = [
    { title: 'First', value: '1' },
    { title: 'Second', value: '2' },
    { title: 'Third', value: '3' },
    { title: 'Fourth', value: '4' },
  ]

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const message = text('Text', 'DropdownSelector')

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

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
      </div>
      <div className="BlockWithList__flex">
        <BlockWithList
          theme={theme}
          frontSide={(<div>frontside</div>)}
          backSide={(<div>backSide</div>)}
          accentColor="#F6029C"
        />
        <BlockWithList
          theme={theme}
          frontSide={(<div>frontside</div>)}
          backSide={(<div>backSide</div>)}
          accentColor="#2ECD94"
        />
        <BlockWithList
          theme={theme}
          frontSide={(<div>frontside</div>)}
          backSide={(<div>backSide</div>)}
          accentColor="#fff"
        />
        <BlockWithList
          theme={theme}
          frontSide={(<div>Without backside</div>)}
          accentColor="#fff"
        />
        <BlockWithList
          theme={theme}
          frontSide={(<div>frontside</div>)}
          backSide={(<div>backSide</div>)}
          accentColor="#fff"
        />
        <BlockWithList
          theme={theme}
          frontSide={(<div>frontside</div>)}
          backSide={(<div>backSide</div>)}
          accentColor="#fff"
        />
      </div>
    </div>
  )
}

export default {
  title: 'BlockWithList component',
  decorators: [withKnobs],
  component: BlockWithList,
  parameters: {},
}
