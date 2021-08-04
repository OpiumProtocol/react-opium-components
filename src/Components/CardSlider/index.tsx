import React, { FC } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'
import TextBlock from '../TextBlock'

// @ts-ignore
import Slider from 'react-slick'
import './CardSlider.scss'
import Card from './Card'
import Box from './Box'

export type Props = {
  /** Define theme */
  theme?: ETheme;
  /** Set class selectors */
  className?: string;
  /** Background image wrapped children */
  content?: string[];
  /** Number or slides in view */
  slidesToShow?: Number;
  /** Show dots to navigate to specific slide */
  dots?: Boolean;
  /** Number of slides to scrolled on next/prev click*/
  slidesToScroll?: Number;
  /** To start again from first when reached end*/
  infinite?: Boolean;
  /** Transition speed*/
  speed?: Number;
  /** items to render in slider */
  autoplay?: Boolean;
  /** items to render in slider */
  sliderItems?: any;
  /** type of slider */
  sliderType?: string;
};

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
}

const CardSlider: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    className,
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay,
    sliderItems,
    sliderType
  } = renderProps
  const settings = {
    dots,
    infinite,
    speed,
    autoplay,
    slidesToShow,
    slidesToScroll,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  }

  return (
    <div className={`custom-slider ${className}`}>
      <Slider {...settings}>
        {sliderType === 'card' ? (
          sliderItems.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                theme={theme}
                cardImageDesktop={item.cardImageDesktop}
                cardImageMobile={item.cardImageMobile}
              />
            )
          })
        ) : (
          sliderItems.map((item: any, index: number) => {
            return (
              <Box
                key={index}
                theme={theme}
                boxImage={item.image}
                title={item.title}
                grossReturn={item.grossReturn}
                annualReturn={item.annualReturn}
                link={item.link}
              />
            )
          })
        )}

      </Slider>
    </div>
  )
}

export default CardSlider
