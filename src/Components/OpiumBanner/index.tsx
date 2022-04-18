import React, { FC, CSSProperties, ReactNode } from 'react'
import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './OpiumBanner.scss'
import { useMobile } from '../../Utils/hooks'

export type Props = {
  /** Set styles */
  style?: CSSProperties
  /** Define theme */
  theme?: ETheme
  /** Set Image Path for desktop*/
  imagePathDesktop?: string
  /** Set Image Path for mobile*/
  imagePathMobile?: string
  /** Insert title */
  title: string | ReactNode
  /** Insert content */
  content?: string | ReactNode
  /** Set note */
  note?: string
  /** Set on click action */
  leftBtn: {text: string, onClick: Function, className?: string }
  /** Set on click action */
  rightBtn?: {text: string, onClick: Function, className?: string }
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  title: 'ETH Dump Protection',
  content: '',
  note: '',
  leftBtn: { text: 'go to staking', onClick: () => {}, className: 'green' }
}

const OpiumBanner: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { width: deviceWidth } = useMobile()

  const { 
    theme,
    imagePathDesktop,
    imagePathMobile,
    title,
    content,
    note,
    leftBtn,
    rightBtn
  } = renderProps

  return (
    <div className='OpiumBanner'>
      <div className='OpiumBanner-wrapper' style={{ backgroundImage: `url('${deviceWidth <= 768 ? imagePathMobile : imagePathDesktop}')` }}>
        <div className='OpiumBanner-content'>
          <div className='banner-wrapper'>
            <div className='banner-title'>{
              typeof title === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              ) : title }</div>
            <div className='banner-content'>{
              typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              ) : content }
            </div>
            <div className='banner-actions' style={{ display: 'flex' }}>
              <Button 
                label={leftBtn.text}
                variant={'primary'}
                className={leftBtn.className}
                onClick={leftBtn.onClick}
                style={{ marginRight: deviceWidth <= 768 ? '1rem' : '2rem' }}
                size={deviceWidth < 1440 ? 'sm' : 'md'}
              />
              {rightBtn && <Button 
                label={rightBtn.text}
                variant={'secondary'}
                onClick={rightBtn.onClick}
                style={{ marginRight: deviceWidth <= 768 ? '1rem' : '2rem' }}
                size={deviceWidth < 1440 ? 'sm' : 'md'}
              />}
            </div>
            <div className='banner-bottom-text'>{note}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpiumBanner
