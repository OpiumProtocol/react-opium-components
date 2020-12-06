import React, { FC, CSSProperties } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import _ from '../../Styles/exportColors.scss'
import './Tooltip.scss'
import InfoLogo from '../../Images/Info.svg'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Trigger component */
  component?: JSX.Element
  /** Tooltip content */
  content?: string | JSX.Element
  /** Trigger label */
  label: string
  /** Side placement */
  placement?: 'right' | 'top' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-end' | 'bottom-start' | 'left-end' | 'left-start' | 'auto-start' | 'auto' | 'auto-end'
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  trigger?: 'hover' | 'click' | 'focus' | OverlayTriggerType[]
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  placement: 'right',
  // label: '!',
  style: {},
  content: <span><strong>Holy guacamole!</strong> Check this info.</span>,
}

const OpiumTooltip: FC<Props> = (props: Props) => {
  const {
    // label,
    theme,
    style,
    trigger,
    content,
    component,
    className,
    placement } = generateRenderProps(defaultProps, props)

  const componentStyle = {
    marginRight: '1rem',
    fontSize: '0.5rem',
    fontWeight: 900,
    borderRadius: '40px',
    padding: '0.5rem 1.1rem',
    color: _.white0,
    backgroundColor: _.blue2,
    borderColor: _.transparent0,
  }

  return (
    <OverlayTrigger
      key={placement}
      trigger={trigger}
      placement={placement}
      overlay={
        <Popover
          style={{ borderColor: 'transparent' }}
          id={`popover-positioned-${placement}`}
          className={`${className} color-scheme-${theme}`}
        >
          <Popover.Content className={`color-scheme-${theme}`}>
            {content}
          </Popover.Content>
        </Popover>
      }
    >
      {
        component
          ? component
          : <img src={InfoLogo}/>
      }
    </OverlayTrigger>
  )
}

export default OpiumTooltip
