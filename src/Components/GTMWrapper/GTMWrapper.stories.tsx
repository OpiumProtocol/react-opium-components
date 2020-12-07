import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import GTMWrapper from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const gtmWrapper = () => {
  const message = text('Text', 'GTM Wrapper')

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

  const backgroundColor = theme === ETheme.DARK ? colors.darkgray1 : colors.white0
  const color = theme === ETheme.DARK ? colors.gray5 : colors.darkgray1

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label={`${label} is on`}
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <Button
        theme={theme}
        variant='primary'
        label="Without GTMWrapper"
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <GTMWrapper id="ceo-wrapped-component" isProduction={false}>
        <Button
          theme={theme}
          label="With GTMWrapper"
          variant="primary"
          onClick={() => { }} />
      </GTMWrapper>
    </div>
  )
}

GTMWrapper.defaultProps = {
  id: 'ceo-wrapped-component',
  children: <></>,
  isProduction: false,
}

export default {
  title: 'GTMWrapper',
  decorators: [withKnobs],
  component: GTMWrapper,
}
