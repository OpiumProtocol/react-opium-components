import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '../OpiumButton'
import Card from './Card'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import CardSlider from './index'
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
export const cardSlider = () => {
  const message = text('Text', 'Card Slider Component')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor =
    sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const SliderItems = [
    {
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: CardDefaulImageWeb4,
    },
    {
      cardImageMobile: CardDefaulImageMob3,
      cardImageDesktop: CardDefaulImageWeb3
    },
   
    {
      cardImageMobile: CardDefaulImageMob2,
      cardImageDesktop: CardDefaulImageWeb2 
    },
    
    {
      cardImageMobile: CardDefaulImageMob1,
      cardImageDesktop: CardDefaulImageWeb1 
    },
  ]

  return (
    <div style={{ padding: '3rem', backgroundColor }} className="sliderpd">
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>
        {message}
      </h1>
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
      <CardSlider
        dots={true}
        infinite={true}
        autoplay={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {SliderItems.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              theme={theme}
              cardImageDesktop={item.cardImageDesktop}
              cardImageMobile={item.cardImageMobile}
            />
          )
        })}
      </CardSlider>
    </div>
  )
}

cardSlider.defaultProps = {
  theme: ETheme.DARK,
  className: '',
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default {
  title: 'Card Slider Component',
  decorators: [withKnobs],
  component: cardSlider,
  parameters: {},
}
