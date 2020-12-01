import React, { FC, CSSProperties, useState } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'

import { generateRenderProps } from '../../Utils/helpers'
import {
  ETheme,
  colorSchemeDark,
  colorSchemeLight,
  getVariant,
} from '../../Constants/Types/theme.types'

import _ from '../../Styles/exportColors.scss'
import './Tooltip.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Trigger component */
  component: JSX.Element
  /** Side placement */
  placement?: 'right' | 'top' | 'bottom' | 'left'
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  trigger?: 'hover' | 'click' | 'focus' | OverlayTriggerType[]
  /** Set button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
  /** Set on click action */
  // onClick: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  placement: 'right',
  variant: 'primary',
  component: <Button variant="secondary">Popover on {'right'}</Button>,
  style: {},
}

const OpiumTooltip: FC<Props> = (props: Props) => {
  const {
    label,
    theme,
    style,
    variant,
    trigger,
    component,
    className,
    placement,
    onMouseEnter,
    onMouseLeave,
    ...rest } = generateRenderProps(defaultProps, props)

  const componentStyle = {
    marginRight: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
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
        <Popover id={`popover-positioned-${placement}`} className={`color-scheme-${theme} ${placement}`}>
          <Popover.Content className={`color-scheme-${theme}`}>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content>
        </Popover>
      }
    >
      {React.cloneElement(component, { style: componentStyle })}
    </OverlayTrigger>
  )
}

export default OpiumTooltip
