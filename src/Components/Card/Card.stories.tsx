import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Card from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

// @ts-ignore
import CardDefaulImageWeb1 from '../../Images/card1-back-image.svg'
// @ts-ignore
import CardDefaulImageMob1 from '../../Images/card1-back-mobileimage.svg'
// @ts-ignore
import CardDefaulImageWeb2 from '../../Images/card2-back-image.svg'
// @ts-ignore
import CardDefaulImageMob2 from '../../Images/card2-back-mobileimage.svg'
// @ts-ignore
import CardDefaulImageWeb3 from '../../Images/card3-back-image.svg'
// @ts-ignore
import CardDefaulImageMob3 from '../../Images/card3-back-mobileimage.svg'
// @ts-ignore
import CardDefaulImageWeb4 from '../../Images/card4-back-image.svg'
// @ts-ignore
import CardDefaulImageMob4 from '../../Images/card4-back-mobileimage.svg'

export const card = () => {
  const message = text('Text', 'Card Component')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const CardItems = [
    {
      className: 'card1-wrap',
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: CardDefaulImageWeb4,
    },
    {
      className: 'card2-wrap',
      cardImageMobile: CardDefaulImageMob3,
      cardImageDesktop: CardDefaulImageWeb3
    },
   
    {
      className: 'card3-wrap',
      cardImageMobile: CardDefaulImageMob2,
      cardImageDesktop: CardDefaulImageWeb2 
    },
    
    {
      className: 'card4-wrap',
      cardImageMobile: CardDefaulImageMob1,
      cardImageDesktop: CardDefaulImageWeb1 
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
      {CardItems.map((item: any, index: number) => {
        return (
          <Card
            key={index}
            theme={theme}
            className={item.className}
            cardImageDesktop={item.cardImageDesktop}
            cardImageMobile={item.cardImageMobile}
          />
        )
      })}
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
