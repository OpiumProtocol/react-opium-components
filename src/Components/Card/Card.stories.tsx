import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Card from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const card = () => {
  const message = text('Text', 'Card Component')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const content1 = [
    '<h2>Turbo MATIC</h2>',
    '<span style="font-size: 2rem">72.21%</span> return annually*',
    '',
    '',
    '<span style="font-size: 9px">* Past performance doesn’t guarantee future results.</span>',
  ]

  const content2 = [
    '<h2>ETH Dump Protection</h2>',
    '<span style="font-size: 2rem">12.24%</span> return annually*',
    '',
    '',
    '<span style="font-size: 9px">* Past performance doesn’t guarantee future results.</span>',
  ]

  const content3 = [
    '<h2>Turbo ETH staking pools</h2>',
    '<span style="font-size: 2rem">7.44%</span> return annually* <span style="font-size: 2rem">5.19%</span> APR on BSC*',
    '',
    '',
    '<span style="font-size: 9px">* Past performance doesn’t guarantee future results.</span>',
  ]

  const content4 = [
    '<h2>Turbo AAVE</h2>',
    'up to <span style="font-size: 2rem">300%</span> APR*',
    '',
    '',
    '<span style="font-size: 9px">* Past performance doesn’t guarantee future results.</span>',
  ]

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
      <Card
        theme={theme}
        className={'card1-wrap'}
        content={content2}
      />
      <br/>
      <Card
        theme={theme}
        className={'card2-wrap'}
        content={content1}
      />
      <br/>
      <Card
        theme={theme}
        className={'card3-wrap'}
        content={content3}
      />
      <br/>
      <Card
        theme={theme}
        className={'card4-wrap'}
        content={content3}
      />
    </div>
  )
}

Card.defaultProps = {
  theme: ETheme.DARK,
  className: '',
}

export default {
  title: 'Card Component',
  decorators: [withKnobs],
  component: Card,
  parameters: {},
}
