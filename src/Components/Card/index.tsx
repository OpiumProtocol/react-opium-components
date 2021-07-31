import React, { FC } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'
import TextBlock from '../TextBlock'
import Button from '../OpiumButton'

// @ts-ignore
import StakingIcon from '../../Images/staking-button-icon.svg'

import './Card.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set class selectors */
  className?: string
  /** Set title */
  title: string
  /** Set content */
  content: JSX.Element
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  title: '',
  content: <></>
}

const Card: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, content, title } = renderProps
  return (
    <div className={`d-flex justify-content-between py-3 px-5 custom-card ${className}`}>
      <div className={'pt-3 px-5'}>
        <div className="text-block color-scheme-DARK ">
          <h2>{title}</h2>
          {content}
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
          <span style={{ fontSize: '9px' }}>* Past performance doesn’t guarantee future results.</span>
        </div>
      </div>
      <div className={'button-warap pr-2'}>
        <div className={'staking-button desktop'}>Staking pool</div>
        <div className={'staking-button mobile'}></div>
      </div>
    </div>
  )
}

export default Card
