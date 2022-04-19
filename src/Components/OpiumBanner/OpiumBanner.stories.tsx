import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import OpiumBanner from './index'
import Button from '../OpiumButton'

import './OpiumBanner.scss'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

// @ts-ignore
import imageDumpDesktop from '../../Images/banners/EthDumpProtectionDesktop.svg'
// @ts-ignore
import imageDumpMobile from '../../Images/banners/EthDumpProtectionMobile.svg'

export const OpiumBannerStory = () => {
  const message = text('Text', 'Banner')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

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
      <OpiumBanner 
        theme={theme}
        imagePathDesktop={imageDumpDesktop}
        imagePathMobile={imageDumpMobile}
        title={'ETH Dump Protection staking pool'}
        content={<>
          <span>0%</span>
          <div>return annualy*</div>
        </>}
        note={'* Past performance doesn’t guarantee future results.'}
        leftBtn={ { text: 'go to staking', className: 'green', onClick: () => {} } }
        rightBtn={ { text: 'found out more', onClick: () => {} } }
      />
    </div>
  )
}
export default {
  title: 'Banner component',
  decorators: [withKnobs],
  component: OpiumBannerStory,
  parameters: {},
}
