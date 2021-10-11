import React, { FC, useEffect } from 'react'
import { generateRenderProps } from '../../../Utils/helpers'
import { ETheme } from '../../../Constants/Types/theme.types'

// @ts-ignore
import StakingSVGDark from '../../../Images/staking-dark.svg'
// @ts-ignore
import StakingSVGLight from '../../../Images/staking-light.svg'
// @ts-ignore
import Button from '../../OpiumButton'
import OpiumLink from '../../OpiumLink'

import './Box.scss'

type Props = {
  /** Define theme */
  theme?: ETheme;
  /** Set class selectors */
  className?: string;
  /** Set title */
  title?: string;
  /** Box Image */
  boxImage: string;
  /** Box Image Desktop */
  defaultImage?: string;
  /** Box gross return */
  grossReturn?: string;
  /** Box annual return */
  annualReturn?: string;
  /** Box read more link */
  link?: any;
  /** Staking Button Label */
  stakingButtonLabel: string
  /** Staking Button click */
  stakingButtonClick: Function
  /** Gross return text */
  grossReturnText?: string
  /** Annual return text */
  annualReturnText?: string
};

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  boxImage: '',
  title: '',
  grossReturn: '',
  annualReturn: '',
  link: '',
  stakingButtonLabel: '',
  grossReturnText: 'Return since inception',
  annualReturnText: 'Annualized return',
  stakingButtonClick: () => {}
}

const Box: FC<Props> = (props: Props) => {

  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, title, boxImage, grossReturn, annualReturn, link, stakingButtonLabel, grossReturnText, annualReturnText, stakingButtonClick } = renderProps


  return (
    <div className={`custom-box ${theme}`} >
      <div className={`text-block color-scheme-${theme}`}>
        <div className="box-wrapper">
          <div className='box-info-wrapper'>
            <div className='box-item-wrapper'>
              <img src={theme === 'DARK' ? StakingSVGDark : StakingSVGLight} />
              <OpiumLink theme={theme} newTab={link.newTab} href={link.href} label={link.label} />
            </div>
            <div className='box-item-wrapper'>
              <div className='box-item-title'>{title}</div>
              <img src={boxImage} />
            </div>
            <div className='box-item-wrapper'>
              <div>{grossReturnText}</div>
              <span className='green-text'>{grossReturn}</span>
            </div>
            <div className='box-item-wrapper'>
              <div>{annualReturnText}</div>
              <span>{annualReturn}</span>
            </div>
          </div>
          <div className="gotostak">
            <Button
              theme={theme}
              label={stakingButtonLabel}
              variant={'secondary'}
              onClick={stakingButtonClick}
              size='sm'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
