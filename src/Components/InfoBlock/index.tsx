import React, { CSSProperties, FC, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

// @ts-ignore
import InfoIcon from '../../Images/info.svg'
// @ts-ignore
import WarningIcon from '../../Images/attention.svg'
import { ETheme, themes, TVariant } from '../../Constants/Types/theme.types'
import { EIconType } from '../../Constants/Types/InfoBlock.types'
import _ from '../../Styles/exportColors.scss'

import { generateRenderProps } from '../../Utils/helpers'

import './InfoBlock.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Insert content */
  content?: string
  /** Set heading */
  heading?: string
  icon?: boolean,

  type?: string,
  /** Set link */
  link?: {
    as?: ReactNode
    to?: string
    href?: string
    title?: string
    newTab?: boolean
    style?: CSSProperties
  }
  /** Set color variant */
  variant?: TVariant
  /** Set class selectors */
  className?: string

  wide?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: '',
  className: '',
  link: {},
}

function createMarkup(content: string) {
  if (content === '') return { __html: '</br>' }
  return { __html: content }
}

const InfoBlock: FC<Props> = (props: Props) => {
  const { content, className, wide, icon, type } = generateRenderProps(defaultProps, props)

  const getColor = (type: string) => {
    switch (type) {
      case EIconType.WARNING:
      case EIconType.ERROR:
        return _.pink
      case EIconType.INFO:
      case EIconType.SUCCESS:
      case EIconType.NEUTRAL:
        return _.blue1
      default:
        return _.white0
    }
  }

  const getLinkColor = (type: string) => {
    switch (type) {
      case EIconType.WARNING:
      case EIconType.ERROR:
        return 'error'
      case EIconType.INFO:
      case EIconType.SUCCESS:
      case EIconType.NEUTRAL:
        return 'info'
      default:
        return ''
    }
  }

  const styled = {
    color: getColor(type),
    borderStyle: 'solid',
    borderRadius: wide ? 0 : '10px',
    width: wide ? '100%' : 'unset',
    textAlign: 'left' as 'left',
  }

  return (
    <div className={`info-block ${getLinkColor(type)} ${className}`} style={styled}>
      {icon && <img src={[EIconType.WARNING, EIconType.ERROR].includes(type) ? WarningIcon : InfoIcon } />}
      {
        content && content.split('\n').map((contentLine: string) => (
          <div
            key={uuidv4()}
            style={{ width: '100%' }}
            dangerouslySetInnerHTML={createMarkup(contentLine)}
          />
        ))
      }
    </div>
  )
}

export default InfoBlock
