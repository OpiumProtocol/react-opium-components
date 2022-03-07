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
          link: '/?path=/story/autocomplete-component--autocomplete-story'
        },
        { title: 'Options greeks',
          link: '?path=/story/chart-component--chart'
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
              link: '/long'
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
              title: 'Long1',
              link: '#'
            },
            { 
              title: 'Short1',
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
          title: 'Option 1',
          link: '#'
        },
        { title: 'Option 2',
          link: '#'
        },
        { title: 'Option 3',
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
        activeLink="/long"
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
