import React, { FC } from 'react'
import { ETheme } from '../../../Constants/Types/theme.types'
import Button from '../../OpiumButton'

import './Card.scss'

export type TProps = {
  /** Define theme */
  theme?: ETheme
  /** Set class selectors */
  className?: string
  /** Set title */
  /** Card Image Desktop */
  cardImageMobile: string
  /** Card Image Desktop */
  cardImageDesktop: string
  /** Staking Button Label */
  stakingButtonLabel: string
  /** Find more Button Label */
  findMoreButtonLabel: string
  /** Staking Button Label */
  stakingButtonClick: Function
  /** Find more Button Label */
  findMoreButtonClick: Function
}

const Card: FC<TProps> = (props: TProps) => {

  const { theme, className, cardImageMobile, cardImageDesktop, stakingButtonLabel, findMoreButtonLabel, stakingButtonClick, findMoreButtonClick } = props
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
              label={stakingButtonLabel}
              className={'mr-2'}
              onClick={stakingButtonClick}
            />
            <Button
              theme={theme}
              variant={'secondary'}
              label={findMoreButtonLabel}
              className={'ml-2'}
              onClick={findMoreButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
