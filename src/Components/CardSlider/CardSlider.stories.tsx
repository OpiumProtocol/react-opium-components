import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '../OpiumButton'
import Card from './Card'
import Box from './Box'

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
// @ts-ignore
import BoxDefaulImageDark from '../../Images/box-avtar-dark.svg'
// @ts-ignore
import { image } from '../../Images/test-card'

export const cardSlider = () => {
  const message = text('Text', 'Card Slider Component')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const SliderItemsCard = [
    {
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: image,
    },
    {
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: image,
    },

    {
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: image,
    },

    {
      cardImageMobile: CardDefaulImageMob4,
      cardImageDesktop: image,
    },
  ]

  const SliderItemsBox = [
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },

    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },

    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.5% *',
      annualReturn: '15.0% *',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      },
    },
    {
      title: 'ETH Dump Protection',
      image: BoxDefaulImageDark,
      grossReturn: '10.0',
      annualReturn: '15.0',
      link: {
        href: 'http://app.opium.finance',
        label: 'Read More',
        newTab: ''
      }
    },
  ]

  return (
    <div style={{ padding: '3rem', backgroundColor }} className="sliderpd">
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>
        {message}
      </h1>
      <div style={{ display: 'flex', marginBottom: '3rem' }}>
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
          variant="primary"
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>
      <CardSlider
        theme={theme}
        dots={true}
        infinite={true}
        autoplay={false}
        speed={1000}
        slidesToShow={4}
        slidesToScroll={1}
        sliderItems={SliderItemsBox}
        sliderType="card"
        className="custom-slider-box"
      >
        {SliderItemsCard.map((item: any, index: number) => {
          return (
            <div key={index} className='card-slider-wrapper' style={{ height: '20rem' }}>
              <Card
                key={index}
                theme={theme}
                CardImageDesktop={item.cardImageDesktop}
                cardImageMobile={item.cardImageMobile}
              />
            </div>
          )
        })}
      </CardSlider>
      <CardSlider
        theme={theme}
        dots={true}
        infinite={true}
        autoplay={false}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        sliderItems={SliderItemsBox}
        sliderType="box"
        className="custom-slider-box"
      >
        {SliderItemsBox.map((item: any, index: number) => {
          return (
            <Box
              key={index}
              theme={theme}
              boxImage={item.image}
              title={item.title}
              grossReturn={item.grossReturn}
              annualReturn={item.annualReturn}
              link={item.link}
              stakingButtonLabel='Stake'
              stakingButtonClick={() => {}}
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
