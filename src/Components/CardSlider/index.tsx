import React, { FC } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'
import TextBlock from '../TextBlock'

// @ts-ignore
import Slider from 'react-slick'
import './CardSlider.scss'

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
    sliderType,
    children
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
          slidesToShow: sliderType === 'box' ? 3 : 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: sliderType === 'box' ? 2 : 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className={`${className}`}>
      <Slider {...settings }>
        {children}
      </Slider>
    </div>
  )
}

export default CardSlider
