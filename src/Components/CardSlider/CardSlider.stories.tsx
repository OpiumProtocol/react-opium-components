import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import CardSlider from './index'
import Card from '../Card'

export const cardSlider = () => {
  const message = text('Text', 'Card Slider Component')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor =
    sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const SliderItems = [
    {
      className: 'card1-wrap',
      title: 'Turbo MATIC',
      content: <><span style={{ fontSize: '2rem' }}>72.21% </span>return annually*</>,
    },
    {
      className: 'card2-wrap',
      title: 'ETH Dump Protection',
      content: <><span style={{ fontSize: '2rem' }}>12.24% </span>return annually*</>,
    },
    {
      className: 'card3-wrap',
      title: 'Turbo ETH staking pools',
      content: <><span style={{ fontSize: '2rem' }}>7.44% </span>return annually* <span style={{ fontSize: '2rem' }}>5.19% </span>APR on BSC*</>,
    },
    {
      className: 'card4-wrap',
      title: 'Turbo AAVE',
      content: <>up to <span style={{ fontSize: '2rem' }}>300% </span>APR*</>,
    }
  ]

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
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
        autoplay={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {SliderItems.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              theme={theme}
              className={item.className}
              title={item.title}
              content={item.content}
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
