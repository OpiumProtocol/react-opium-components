import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import NumberBlock from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const numberBlock = () => {
  const message = text('Text', 'NumberBlock')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [label, setLabel] = useState<ETheme>(ETheme.DARK)

  const handleClick = () => {
    if (theme === ETheme.LIGHT) {
      setTheme(ETheme.DARK)
      setLabel(ETheme.DARK)
    }
    if (theme === ETheme.DARK) {
      setTheme(ETheme.LIGHT)
      setLabel(ETheme.LIGHT)
    }
  }

  const styles = {
    color: 'darkred',
    backgroundColor: 'white',
    border: '1px darkred solid',
    borderRadius: '5px',
  }

  const content = 1231.23123

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label={`${label} is on`}
          variant={'secondary'}
          style={{ marginRight: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <NumberBlock
        theme={theme}
        content={content}
        toFixed={2}
        locale={'ru'}
      // styles={styles}
      />
    </div>
  )
}

NumberBlock.defaultProps = {
  theme: ETheme.DARK,
  content: 0.000,
  styles: {},
}

export default {
  title: 'NumberBlock component',
  decorators: [withKnobs],
  component: NumberBlock,
  parameters: {},
}
