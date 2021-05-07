import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import _ from '../../Styles/exportColors.scss'

import {
  useAccordionToggle
} from 'react-bootstrap'

import ContainerWithCollapse from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const containerWithCollapse = () => {
  const message = text('Text', 'ContainerWithCollapse')

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
      hoverControlled: false
    },
    {
      id: 1,
      content: 'hidden content 134',
      headerText: 'Header hello!',
      accentColor: '#2ECD94',
      disabled: false,
      disabledMessage: '',
      hoverControlled: false
    },
    {
      id: 2,
      content: 'hidden content 245',
      headerText: 'Header hello!',
      accentColor: _.white0,
      disabled: false,
      disabledMessage: '',
      hoverControlled: false
    },
    {
      id: 3,
      content: 'hidden content 355',
      headerText: 'Header hello!',
      accentColor: _.white0,
      disabled: true,
      disabledMessage: 'I am disabled',
      hoverControlled: false
    },
    {
      id: 4,
      content: 'hidden content 455',
      headerText: 'Header hello!',
      accentColor: _.white0,
      disabled: false,
      disabledMessage: 'I am disabled',
      hoverControlled: true
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
      <div className="ContainerWithCollapse">
        {
          componentsArr.map((el, i) => {

            const ToggleButton = () => (
              <button
                type="button"
                onClick={useAccordionToggle(i.toString())}
              >
                Click meee
              </button>
            )

            const headerContent = (
              <div>
                <p>{el.headerText}</p>
                <ToggleButton />
              </div>
            )

            return (
              <ContainerWithCollapse
                eventKey={i.toString()}
                key={el.id.toString()}
                theme={theme}
                accentColor={el.accentColor}
                header={headerContent}
                body={el.content}
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
  title: 'ContainerWithCollapse component',
  decorators: [withKnobs],
  component: ContainerWithCollapse,
  parameters: {},
}
