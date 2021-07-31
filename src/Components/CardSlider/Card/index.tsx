import React, { FC } from 'react'

import { generateRenderProps } from '../../../Utils/helpers'
import { ETheme } from '../../../Constants/Types/theme.types'
// @ts-ignore
import CardDefaulImageWeb from '../../../Images/card1-back-image.svg'
// @ts-ignore
import CardDefaulImageMob from '../../../Images/card1-back-mobileimage.svg'
import Button from '../../OpiumButton'

import './Card.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set class selectors */
  className?: string
  /** Set title */
  /** Card Image Desktop */
  cardImageMobile:string
  /** Card Image Desktop */
  cardImageDesktop:string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  cardImageMobile: CardDefaulImageMob,
  cardImageDesktop: CardDefaulImageWeb
}

const Card: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, cardImageMobile, cardImageDesktop } = renderProps
  return (
    <div className={`d-flex justify-content-between custom-card ${className}`}>
      <div className="card-warap">
        <img src={cardImageMobile} className="mobile" />
        <img src={cardImageDesktop} className="desktop"/>
        <div className="text-block color-scheme-DARK ">
          <div className="d-flex py-3 d-inline-block">
            <Button
              theme={theme}
              variant={'success'}
              label={'go to staking'}
              className={'mr-2'}
              onClick={() => { }}
            />
            <Button
              theme={theme}
              variant={'secondary'}
              label={'find out more'}
              className={'ml-2'}
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
