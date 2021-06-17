import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import InfoBlock from './index'
import Button from '../OpiumButton'

import {ETheme, sectionThemes, TVariant} from '../../Constants/Types/theme.types'
import {EIconType} from "../../Constants/Types/InfoBlock.types";

export const infoBlock = () => {
  const message = text('Text', 'InfoBlock')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const styles = {
    color: 'darkred',
    backgroundColor: 'white',
    border: '1px darkred solid',
    borderRadius: '5px',
  }

  const content = 'Initial text line'

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
      <InfoBlock
        link={{
          as: 'a',
          href: '//www.google.com',
          title: 'Google',
          newTab: true,
        }}
        theme={theme}
        content={content}
        variant={'secondaryRed'}
        icon={true}
        type={EIconType.INFO}
      />
      <InfoBlock
        link={{
          as: 'a',
          href: '//www.google.com',
          title: 'Google',
          newTab: true,
        }}
        theme={theme}
        content={content}
        icon={true}
        type={EIconType.WARNING}
      />
      <InfoBlock
        link={{
          as: 'a',
          href: '//www.google.com',
          title: 'Google',
          newTab: true,
        }}
        theme={theme}
        content={content}
        variant={'info'}
      />
    </div>
  )
}

InfoBlock.defaultProps = {
  theme: ETheme.DARK,
  content: '',
}

export default {
  title: 'InfoBlock component',
  decorators: [withKnobs],
  component: InfoBlock,
  parameters: {},
}
