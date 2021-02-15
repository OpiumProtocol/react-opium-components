import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Tooltip from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const tooltip = () => {
  const message = text('Text', 'Tooltip')

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
      <Tooltip
        trigger="click"
        theme={theme}
        label={'!'}
        placement='top-start'
        content='Line <br/> Next line'
      />
      <Tooltip
        trigger="hover"
        disabledBtn={true}
        theme={theme}
        label={'!'}
        placement='top-start'
        content='Line <br/> Next line'
        component={<Button disabled={true} label="test" onClick={() => {}} />}
      />
    </div>
  )
}

Tooltip.defaultProps = {
  theme: ETheme.DARK,
  className: '',
  style: {},
}

export default {
  title: 'OpiumTooltip',
  decorators: [withKnobs],
  component: Tooltip,
}
