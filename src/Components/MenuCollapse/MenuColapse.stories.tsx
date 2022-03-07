import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropDown from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'


export const MenuCollapseStory = () => {
  const message = text('Text', 'Menu Collapse')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = [
    { 
      title: 'Key terms',
      articles: [
        {
          title: 'Strike price',
          link: 'http://app.opium.finance'
        },
        { title: 'Options greeks',
          link: '#'
        },
        { title: '...the money',
          link: '#'
        }
      ]
    },
    { 
      title: 'Basic strategies',
      articles: [
        { title: 'Options call',
          articles: [
            { 
              title: 'Long',
              link: 'http://app.opium.finance'
            },
            { 
              title: 'Short',
              link: '#'
            }
          ]
        },
        { title: 'Options put',
          articles: [
            { 
              title: 'Long',
              link: '#'
            },
            { 
              title: 'Short',
              link: '#'
            }
          ]
        }
      ]
    },
    { 
      title: 'Strategies',
      articles: [
        {
          title: 'Strike price',
          link: '#'
        },
        { title: 'Options greeks',
          link: '#'
        },
        { title: '...the money',
          link: '#'
        }
      ]
    }
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
      <DropDown
        theme={theme}
        items={data}
      />
    </div>
  )
}


export default {
  title: 'MenuCollapse component',
  decorators: [withKnobs],
  component: MenuCollapseStory,
  parameters: {},
}
