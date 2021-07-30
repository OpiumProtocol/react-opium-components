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
  /** Background image wrapped children */
  content?: string[]
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
}

const Card: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, content, backChildren } = renderProps
  return (
    <div className={`d-flex justify-content-between py-3 px-5 custom-card ${className}`}>
      <div className={'pt-3 px-5'}>
        <TextBlock
          theme={theme}
          content={content}
        />
      </div>
      <div className={'button-warap pr-2'}>
        <Button
          theme={theme}
          label='Staking Pool'
          iconPath={StakingIcon}
          variant={'secondary'}
          className={'staking-button'}
          onClick={() => console.log('button')}
        />
      </div>
    </div>
  )
}

export default Card
