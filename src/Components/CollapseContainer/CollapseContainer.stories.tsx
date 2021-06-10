import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import _ from '../../Styles/exportColors.scss'

import CollapseContainer from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const collapseContainer = () => {
  const message = text('Text', 'CollapseContainer')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const componentsArr = [
    {
      id: 0,
      content: 'hidden content 23',
      headerText: 'Header hello!',
      accentColor: '#F6029C',
      disabled: false,
      disabledMessage: '',
      hoverControlled: false,
      collapseButton: 'click me :)'
    },
    {
      id: 1123,
      content: 'hidden content 134',
      headerText: 'Header hello!',
      accentColor: '#2ECD94',
      disabled: false,
      disabledMessage: '',
      hoverControlled: false,
      collapseButton: 'click me :)'
    },
    {
      id: 2123,
      content: 'hidden content 245',
      headerText: 'Header hello!',
      accentColor: _.white0,
      accentColorLight: _.darkblue1,
      disabled: false,
      disabledMessage: '',
      hoverControlled: false,
      collapseButton: 'click me :)'
    },
    {
      id: 3123,
      content: 'hidden content 355',
      headerText: 'Header hello!',
      accentColor: _.white0,
      accentColorLight: _.darkblue1,
      disabled: true,
      disabledMessage: 'I am disabled',
      hoverControlled: false,
      collapseButton: <div>My button</div>
    },
    {
      id: 4123,
      content: 'hidden content 455 hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455hidden content 455',
      headerText: 'Header hello!',
      accentColor: _.white0,
      accentColorLight: _.darkblue1,
      disabled: false,
      disabledMessage: 'I am disabled',
      hoverControlled: true,
      collapseButton: 'click me :)'
    },
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
      <div className="CollapseContainer">
        {
          componentsArr.map((el, i) => {

            const headerContent = (id: number) => (
              <div>
                <p>{el.headerText}</p>
              </div>
            )

            const bodyContent = (
              <>
                {el.content}
              </>
            )

            return (
              <CollapseContainer
                key={el.id.toString()}
                theme={theme}
                accentColor={el.accentColor}
                accentColorLight={el.accentColorLight}
                
                header={headerContent(el.id)}
                body={bodyContent}
                collapseButton={el.collapseButton}

                disabled={el.disabled}
                disabledMessage={el.disabledMessage}
                hoverControlled={el.hoverControlled}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default {
  title: 'CollapseContainer component',
  decorators: [withKnobs],
  component: CollapseContainer,
  parameters: {},
}
